import GalleryImages from './gallery-images';
import GalleryProvider from './gallery-provider';
import GallerySidebar from './gallery-sidebar';

// main container
const GalleryContainer = () => {
  return (
    <GalleryProvider>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <GallerySidebar />
        <GalleryImages />
      </div>
    </GalleryProvider>
  );
};

export default GalleryContainer;
