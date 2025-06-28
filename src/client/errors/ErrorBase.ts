export interface ErrorBase {
  code: number;
  message: string;
  params?: unknown;
}
