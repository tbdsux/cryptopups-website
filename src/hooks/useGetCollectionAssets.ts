import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { useAtomicGetter } from '@cryptopuppie/useatomicassets';
import { GetAccountCollectionProps } from '../types/collection';

const useGetCollectionAssets = () => {
  const { user } = useWaxUser();

  return useAtomicGetter<GetAccountCollectionProps>(
    user
      ? {
          uri: `/atomicassets/v1/accounts/${user.wallet}/cryptopuppie`
        }
      : undefined
  );
};

export default useGetCollectionAssets;
