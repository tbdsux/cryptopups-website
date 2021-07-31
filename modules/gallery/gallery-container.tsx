import GalleryImages from './gallery-images';
import GallerySidebar from './gallery-sidebar';

const GalleryContainer = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between">
      <GallerySidebar />
      <GalleryImages />
    </div>
  );
};

export default GalleryContainer;
