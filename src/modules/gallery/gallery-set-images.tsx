import useGetSetImages from '../../hooks/useGetSetImages';
import ImageLightbox from './gallery-lightbox';

interface GallerySetImagesProps {
  templates: string[];
  showOwned: boolean;
}

const GallerySetImages = ({ templates, showOwned }: GallerySetImagesProps) => {
  const setImages = useGetSetImages();

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-8 gap-6 justify-center ">
        {setImages?.map((i, index) => (
          <ImageLightbox
            key={index}
            src={`https://atomichub-ipfs.com/ipfs/${i.immutable_data.img}`}
            alt={i.immutable_data.name}
            className={showOwned ? (templates?.includes(i.template_id) ? '' : 'grayscale') : ''}
          />
        ))}
      </ul>
    </>
  );
};

export default GallerySetImages;
