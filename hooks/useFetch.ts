type useFetchProps = {
  url: string;
  method: "get" | "post";
  headers?: HeadersInit;
};
const useFetch = async <T>({
  url,
  method,
  headers,
}: useFetchProps): Promise<T | null> => {
  try {
    const r = await fetch(url, {
      method: method,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });
    return await r.json();
  } catch (e) {
    return null;
  }
};

export default useFetch;
