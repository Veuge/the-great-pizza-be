import { NotFoundError, InternalError } from "../database/errors";


// error handler for async-await routes
// from https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch((err)=>{
      console.log(err);
      switch (err.name) {
        case NotFoundError.name:
          return res.status(404).send({
            message: 'Record not found',
          });
        case InternalError.name:
        default:
          return res.status(500).send({
            message: 'Internal error',
          });

      }
    });
};

export default asyncMiddleware;
