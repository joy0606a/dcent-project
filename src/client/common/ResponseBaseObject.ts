import { ErrorBase } from '@/client/errors/ErrorBase';

export interface ResponseBaseObject<T = any> {
  error: ErrorBase;
  payload: T;
}
