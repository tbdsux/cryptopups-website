import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { useGetAssets } from '@cryptopuppie/useatomicassets';

// use it only if you need the assets owned by the user otherwise `useGetOwnedTemplates` might be better
const useGetUserAssets = () => {
  const { user } = useWaxUser();

  const { data } = useGetAssets(
    user
      ? {
          owner: user.wallet,
          collection_name: 'cryptopuppie',
          schema_name: 'puppycards,pupskincards,pupitems,pupmojicards',
          limit: 1000
        }
      : undefined
  );

  return data;
};

export default useGetUserAssets;
