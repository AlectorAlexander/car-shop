import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorCatalog } from './catalog';

const errorHandler: ErrorRequestHandler = ( 
  err: Error | ZodError, 
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    const { message } = err.issues[0];
    
    return res.status(400).json({ message });
  }
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;

  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message });
  }

  console.error(err);
  return res.status(500).json({ message: 'internal error' });
};

export default errorHandler;