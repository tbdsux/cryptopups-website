type GalleryImagesProps = {
  filter?: string;
  category?: string;
};
const GalleryImages = ({ filter, category }: GalleryImagesProps) => {
  return <div className="w-full mt-8 md:mt-0 ml-0 md:ml-12 h-144 border rounded-lg"></div>;
};

export default GalleryImages;
