interface APIResponseProps<T> {
  error: boolean;
  data?: T;
  message?: string;
}

interface AWAPIResponseProps<T> {
  success: boolean;
  data?: T;
  query_time: number;
}

export type { APIResponseProps, AWAPIResponseProps };
