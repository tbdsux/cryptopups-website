import { useGetTemplates } from '@cryptopuppie/useatomicassets';

const useImages = () => {
  const { data, isError } = useGetTemplates({
    collection_name: 'cryptopuppie',
    schema_name: 'pupskincards,pupitems,puppycards,pupmojicards',
    sort: 'created',
    order: 'desc',
    limit: 1000
  });

  if (isError) {
    return false;
  }

  return data;
};

export { useImages };
