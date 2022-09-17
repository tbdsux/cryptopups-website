import useGetCollectionAssets from './useGetCollectionAssets';

// gets the owned assets of the user from the collection
const useGetOwnedTemplates = () => {
  const { data } = useGetCollectionAssets();

  if (!data) return;

  let allTemplates: string[] = [];
  for (const i of data.templates) {
    allTemplates.push(i.template_id);
  }

  return allTemplates;
};

export default useGetOwnedTemplates;
