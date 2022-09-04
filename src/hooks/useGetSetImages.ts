import { useGetTemplates } from '@cryptopuppie/useatomicassets';
import { useGallery } from '../modules/gallery/provider';

const useGetSetImages = () => {
  const { set } = useGallery();
  const ids = set.templates.join();

  const { data } = useGetTemplates({
    collection_name: 'cryptopuppie',
    ids,
    limit: 1000
  });

  return data;
};

export default useGetSetImages;
