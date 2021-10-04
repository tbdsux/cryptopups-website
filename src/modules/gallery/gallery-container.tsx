import GalleryImages from './gallery-images';
import GalleryProvider from './gallery-provider';
import GallerySidebar from './gallery-sidebar';
import { useImages } from './useImages';

// main container
const GalleryContainer = () => {
  const images = useImages();

  return (
    <GalleryProvider>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <GallerySidebar images={images} />
        <GalleryImages images={images} />
      </div>
    </GalleryProvider>
  );
};

export default GalleryContainer;
