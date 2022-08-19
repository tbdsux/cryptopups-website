import { useWaxUser } from '@cryptopuppie/next-waxauth';
import useGetOwnerTemplates from '../../hooks/useGetOwnerTemplates';
import GalleryClaimRewards from '../claim-rewards/modal';
import ImageLightbox from './gallery-lightbox';
import { useGallery } from './provider';

const GalleryImages = () => {
  const { category, rarity, pupname, set, images, showOwned } = useGallery();

  const { isLoggedIn } = useWaxUser();
  const templates = useGetOwnerTemplates();

  const filterImages = images.filter((i) => {
    return set.templates.includes(Number(i.template_id));
  });
  const filterCollection = filterImages?.filter((i) => {
    if (!isLoggedIn) return true;

    if (templates?.includes(i.template_id)) {
      return true;
    }
  });

  return (
    <>
      {set.title === 'All' ? (
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
                alt={i.immutable_data.name}
              />
            ))}
        </ul>
      ) : (
        <>
          {isLoggedIn ? (
            <div className="flex items-center justify-center mb-4">
              <p className="mx-4 text-gray-700 font-bold text-sm">
                {filterCollection.length}/{filterImages.length} collected
              </p>
              <GalleryClaimRewards />
            </div>
          ) : (
            <></>
          )}

          <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-8 gap-6 justify-center ">
            {filterImages.map((i, index) => (
              <ImageLightbox
                key={index}
                src={`https://atomichub-ipfs.com/ipfs/${i.immutable_data.img}`}
                alt={i.immutable_data.name}
                className={showOwned ? (templates?.includes(i.template_id) ? '' : 'grayscale') : ''}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default GalleryImages;
