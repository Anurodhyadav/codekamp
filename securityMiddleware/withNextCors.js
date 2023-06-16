import NextCors from "nextjs-cors";

export default function withNextCors(handler) {
  return async function nextApiHandlerWrappedWithNextCors(req, res) {
    const methods = ["GET", "POST"];
    await NextCors(req, res, {
      methods,
      origin: URL,
      optionsSuccessStatus: 200,
    });

    return handler(req, res);
  };
}
