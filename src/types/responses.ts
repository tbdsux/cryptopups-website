interface APIResponseProps<T> {
  error: boolean;
  data?: T;
  message?: string;
}

export type { APIResponseProps };
