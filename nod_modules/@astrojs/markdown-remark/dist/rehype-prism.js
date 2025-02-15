import { runHighlighterWithAstro } from "@astrojs/prism/dist/highlighter";
import { highlightCodeBlocks } from "./highlight.js";
const rehypePrism = () => {
  return async (tree) => {
    await highlightCodeBlocks(tree, (code, language) => {
      let { html, classLanguage } = runHighlighterWithAstro(language, code);
      return Promise.resolve(
        `<pre class="${classLanguage}" data-language="${language}"><code is:raw class="${classLanguage}">${html}</code></pre>`
      );
    });
  };
};
export {
  rehypePrism
};
