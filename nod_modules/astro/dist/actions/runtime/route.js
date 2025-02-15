import { getActionContext } from "./virtual/server.js";
const POST = async (context) => {
  const { action, serializeActionResult } = getActionContext(context);
  if (action?.calledFrom !== "rpc") {
    return new Response("Not found", { status: 404 });
  }
  const result = await action.handler();
  const serialized = serializeActionResult(result);
  if (serialized.type === "empty") {
    return new Response(null, {
      status: serialized.status
    });
  }
  return new Response(serialized.body, {
    status: serialized.status,
    headers: {
      "Content-Type": serialized.contentType
    }
  });
};
export {
  POST
};
