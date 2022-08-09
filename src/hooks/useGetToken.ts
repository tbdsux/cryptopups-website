import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { AuthUser } from '../types/auth';
import { InternalAPIResponseProps } from '../types/responses';

const useGetToken = () => {
  const { data } = useSWR<InternalAPIResponseProps<AuthUser>>('/api/get-token', fetcher);

  return data?.data;
};

export default useGetToken;
