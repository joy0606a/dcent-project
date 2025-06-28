import { ErrorBase } from '@/apis/errors/ErrorBase';

export interface ResponseBaseObject<T = any> {
  error: ErrorBase;
  payload: T;
}
