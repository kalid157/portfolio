import { encryptString } from "../../../core/encryption.js";
import { renderChild } from "./any.js";
import { renderSlotToString } from "./slot.js";
const internalProps = /* @__PURE__ */ new Set([
  "server:component-path",
  "server:component-export",
  "server:component-directive",
  "server:defer"
]);
function containsServerDirective(props) {
  return "server:component-directive" in props;
}
function safeJsonStringify(obj) {
  return JSON.stringify(obj).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/\//g, "\\u002f");
}
function createSearchParams(componentExport, encryptedProps, slots) {
  const params = new URLSearchParams();
  params.set("e", componentExport);
  params.set("p", encryptedProps);
  params.set("s", slots);
  return params;
}
function isWithinURLLimit(pathname, params) {
  const url = pathname + "?" + params.toString();
  const chars = url.length;
  return chars < 2048;
}
function renderServerIsland(result, _displayName, props, slots) {
  return {
    async render(destination) {
      const componentPath = props["server:component-path"];
      const componentExport = props["server:component-export"];
      const componentId = result.serverIslandNameMap.get(componentPath);
      if (!componentId) {
        throw new Error(`Could not find server component name`);
      }
      for (const key2 of Object.keys(props)) {
        if (internalProps.has(key2)) {
          delete props[key2];
        }
      }
      destination.write("<!--[if astro]>server-island-start<![endif]-->");
      const renderedSlots = {};
      for (const name in slots) {
        if (name !== "fallback") {
          const content = await renderSlotToString(result, slots[name]);
          renderedSlots[name] = content.toString();
        } else {
          await renderChild(destination, slots.fallback(result));
        }
      }
      const key = await result.key;
      const propsEncrypted = Object.keys(props).length === 0 ? "" : await encryptString(key, JSON.stringify(props));
      const hostId = crypto.randomUUID();
      const slash = result.base.endsWith("/") ? "" : "/";
      let serverIslandUrl = `${result.base}${slash}_server-islands/${componentId}${result.trailingSlash === "always" ? "/" : ""}`;
      const potentialSearchParams = createSearchParams(
        componentExport,
        propsEncrypted,
        safeJsonStringify(renderedSlots)
      );
      const useGETRequest = isWithinURLLimit(serverIslandUrl, potentialSearchParams);
      if (useGETRequest) {
        serverIslandUrl += "?" + potentialSearchParams.toString();
        destination.write(
          `<link rel="preload" as="fetch" href="${serverIslandUrl}" crossorigin="anonymous">`
        );
      }
      destination.write(`<script async type="module" data-island-id="${hostId}">
let script = document.querySelector('script[data-island-id="${hostId}"]');

${useGETRequest ? (
        // GET request
        `let response = await fetch('${serverIslandUrl}');
`
      ) : (
        // POST request
        `let data = {
	componentExport: ${safeJsonStringify(componentExport)},
	encryptedProps: ${safeJsonStringify(propsEncrypted)},
	slots: ${safeJsonStringify(renderedSlots)},
};

let response = await fetch('${serverIslandUrl}', {
	method: 'POST',
	body: JSON.stringify(data),
});
`
      )}
if (script) {
	if(
		response.status === 200 
		&& response.headers.has('content-type') 
		&& response.headers.get('content-type').split(";")[0].trim() === 'text/html') {
		let html = await response.text();
	
		// Swap!
		while(script.previousSibling &&
			script.previousSibling.nodeType !== 8 &&
			script.previousSibling.data !== '[if astro]>server-island-start<![endif]') {
			script.previousSibling.remove();
		}
		script.previousSibling?.remove();
	
		let frag = document.createRange().createContextualFragment(html);
		script.before(frag);
	}
	script.remove();
}
</script>`);
    }
  };
}
export {
  containsServerDirective,
  renderServerIsland
};
