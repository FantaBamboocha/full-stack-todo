import { NextFunction, Request, Response } from 'express';

import ApiError from '../exceptions/api-error.js';

function errorMiddleware(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message });
  }
  res.status(500).json({ message: 'Internal Server Error' });
}

export default errorMiddleware;
