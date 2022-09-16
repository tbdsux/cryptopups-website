import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { useAtomicGetter } from '@cryptopuppie/useatomicassets';
import { GetAccountCollectionProps } from '../types/collection';

const useGetAccountCollectionSchemas = () => {
  const { user } = useWaxUser();
  const { data } = useAtomicGetter<GetAccountCollectionProps>(
    user ? { uri: `/atomicassets/v1/accounts/${user.wallet}/cryptopuppie` } : undefined
  );

  if (!data) return null;

  let newMap: Record<string, string> = {};
  for (const i of data.schemas) {
    newMap[i.schema_name] = i.assets;
  }

  return newMap;
};

export default useGetAccountCollectionSchemas;
