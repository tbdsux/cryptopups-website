import { ImagesTemplateProps } from '../../types/template';
import ImageLightbox from './gallery-lightbox';
import { useGallery } from './gallery-provider';

//  const AllImages: GalleryImagesProps[] = [...pupcards, ...pupskins, ...pupitems];

type GalleryImagesProps = {
  images: ImagesTemplateProps[] | null | false | undefined;
};

const GalleryImages = ({ images }: GalleryImagesProps) => {
  // const images = useImages();
  const { state } = useGallery();
  const { rarity, category, names } = state;

  return (
    <div className="w-full mt-8 md:mt-0 ml-0 md:ml-12 h-172 lg:h-200 border border-warmGray-300 rounded-lg overflow-auto p-6">
      {images === false ? (
        <p>
          Failed to load gallery images. If problem persists, please send a message to community
          mods and admins.
        </p>
      ) : images === null ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-8 gap-6">
          {images
            ?.filter((i) => {
              if (category.length === 0) return true;

              return category.includes(i.schema.schema_name);
            })
            .filter((i) => {
              if (rarity.length === 0) return true;

              return rarity.includes(i.immutable_data.League.toLowerCase());
            })
            .filter((i) => {
              if (names.length === 0) return true;

              for (const f of names) {
                if (i.schema.schema_name === 'pupitems') {
                  if (i.immutable_data['Item Owner']?.toLowerCase().includes(f)) {
                    return true;
                  }
                  return;
                }

                if (i.name.toLowerCase().includes(f)) {
                  return true;
                }
              }
            })
            .map((i, index) => (
              <ImageLightbox
                key={index}
                src={`https://atomichub-ipfs.com/ipfs/${i.immutable_data.img}`}
                alt={i.name}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default GalleryImages;
