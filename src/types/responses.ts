interface InternalAPIResponseProps<T> {
  error: boolean;
  data?: T;
  message?: string;
}

interface AWAPIResponseProps<T> {
  success: boolean;
  data?: T;
  query_time: number;
}

export type { InternalAPIResponseProps, AWAPIResponseProps };
