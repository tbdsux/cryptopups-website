import { useGetAssets } from '@cryptopuppie/useatomicassets';

const useGetSchemaAssets = (schema: string, owner?: string, initialData?: Record<string, any>) => {
  const { data } = useGetAssets(
    owner
      ? {
          collection_name: 'cryptopuppie',
          schema_name: schema,
          owner: owner,
          page: 1,
          limit: 1000
        }
      : undefined,
    undefined,
    { initialData }
  );

  return data;
};

export default useGetSchemaAssets;
