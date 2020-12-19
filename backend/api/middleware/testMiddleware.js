function testMiddleware(req, res, next) {
  console.log("this is the middleware speaking!");

  next();
}

export default testMiddleware;
