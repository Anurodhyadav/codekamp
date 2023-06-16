import withNextCors from "securityMiddleware/nextCors";

const ApiHandler = (methods) => {
  return withNextCors(function (req, res) {
    if (!req.method || !Object.keys(methods).includes(req.method)) {
      return res.status(405).send("Method not allowed");
    }

    return methods[req.method](req, res);
  });
};

export default ApiHandler;
