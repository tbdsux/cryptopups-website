import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { useGetTableRows } from '@cryptopuppie/useeoschain';
import { waxGGContract } from '../lib/config';

interface WaxProfileProps {
  account: string;
  photo_hash: string;
}

const DEFAULT_PHOTO_HASH = 'QmdwQBF9r25ZZH6LCkxBDWYKvnhLq3QKH9EHefRTuNryir';

const useGetWaxProfile = () => {
  const { user } = useWaxUser();

  const { data } = useGetTableRows<WaxProfileProps>(
    user
      ? {
          code: waxGGContract,
          scope: waxGGContract,
          json: true,
          limit: 1,
          lower_bound: user.wallet,
          upper_bound: user.wallet,
          table: 'photos'
        }
      : undefined
  );

  if (data) {
    if (data.rows.length > 0) return data.rows[0].photo_hash;
  }

  return DEFAULT_PHOTO_HASH;
};

export default useGetWaxProfile;
