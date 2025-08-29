export type Payload = { [key: string]: number | string | Date | object | null };
export interface ApiResponse<T> {
  data: T;
  error?: string | null | unknown;
}
