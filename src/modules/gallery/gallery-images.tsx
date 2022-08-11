import { ImagesTemplateProps } from '../../types/template';
import ImageLightbox from './gallery-lightbox';

interface GalleryImagesProps {
  category?: string;
  rarity?: string;
  pupname?: string;
  set: {
    name: string;
    templates: string[];
  };
  images: ImagesTemplateProps[];
}

const GalleryImages = ({ category, rarity, pupname, set, images }: GalleryImagesProps) => {
  return (
    <>
      {set.name === 'All' ? (
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-8 gap-6">
          {images
            .filter((i) => {
              if (category) {
                return category === i.schema.schema_name;
              }

              return true;
            })
            .filter((i) => {
              if (rarity) {
                return rarity === i.immutable_data.League.toLowerCase();
              }

              return true;
            })
            .filter((i) => {
              if (pupname) {
                return pupname?.toLowerCase() === i.immutable_data['Item Owner']?.toLowerCase();
              }

              return true;
            })
            .map((i, index) => (
              <ImageLightbox
                key={index}
                src={`https://atomichub-ipfs.com/ipfs/${i.immutable_data.img}`}
                alt={i.name}
              />
            ))}
        </ul>
      ) : (
        <>
          <div className="flex items-center justify-center mb-4">
            <p className="mx-4 text-gray-700 font-bold text-sm">10/10 collected</p>
            <button className="mx-4 py-2 px-6 rounded-full text-sm bg-orange-400 hover:bg-orange-500 text-white duration-300">
              claim rewards
            </button>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-8 gap-6">
            {images
              .filter((i) => set.templates.includes(i.template_id))
              .map((i, index) => (
                <ImageLightbox
                  key={index}
                  src={`https://atomichub-ipfs.com/ipfs/${i.immutable_data.img}`}
                  alt={i.name}
                />
              ))}
          </ul>
        </>
      )}
    </>
  );
};

export default GalleryImages;
