import { CustomError } from '../errors/custom-error.js';

const globalErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Something went wrong.Try again later' });
};

export default globalErrorHandler;
