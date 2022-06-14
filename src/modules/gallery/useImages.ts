import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { ImagesResponseProps } from '../../types/template';

const useImages = () => {
  const { data } = useSWR<ImagesResponseProps>(
    'https://wax.api.atomicassets.io/atomicassets/v1/templates?collection_name=cryptopuppie&schema_name=pupskincards%2Cpupitems%2Cpuppycards&page=1&limit=1000&order=desc&sort=created',
    fetcher
  );

  if (!data) {
    return null;
  }

  if (!data.success) {
    return false;
  }

  return data.data;
};

export { useImages };
