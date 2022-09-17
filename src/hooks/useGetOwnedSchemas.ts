import useGetCollectionAssets from './useGetCollectionAssets';

const useGetOwnedSchemas = () => {
  const { data } = useGetCollectionAssets();

  if (!data) return null;

  let newMap: Record<string, string> = {};
  for (const i of data.schemas) {
    newMap[i.schema_name] = i.assets;
  }

  return newMap;
};

export default useGetOwnedSchemas;
