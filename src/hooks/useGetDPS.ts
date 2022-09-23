import { useWaxUser } from '@cryptopuppie/next-waxauth';
import useSWR from 'swr';
import { cordyApi } from '../lib/config';
import fetcher from '../lib/fetcher';
import { DPSProps } from '../types/dps';

const useGetDPS = () => {
  const { user } = useWaxUser();
  const { data } = useSWR<DPSProps>(user ? cordyApi + '/dps/' + user.wallet : undefined, fetcher);

  return data;
};

export default useGetDPS;
