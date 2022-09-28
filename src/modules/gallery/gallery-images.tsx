import { useWaxUser } from '@cryptopuppie/next-waxauth';
import useGetOwnedTemplates from '../../hooks/useGetOwnedTemplates';
import GalleryClaimRewards from '../claim-rewards/modal';
import ImageLightbox from './gallery-lightbox';
import GallerySetImages from './gallery-set-images';
import { useGallery } from './provider';

const GalleryImages = () => {
  const { category, rarity, pupname, set, images, showOwned } = useGallery();

  const { isLoggedIn } = useWaxUser();
  const templates = useGetOwnedTemplates();

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
            .filter((i) => i.immutable_data.img != undefined) // filter for blank image fields
            .filter((i) => {
              if (category != 'None') {
                return category == i.schema.schema_name;
              }

              return true;
            })
            .filter((i) => {
              if (rarity != 'None') {
                return (
                  rarity == i.immutable_data.League?.toLowerCase() ||
                  rarity == i.immutable_data.league?.toLowerCase()
                );
              }

              return true;
            })
            .filter((i) => {
              if (pupname != 'None') {
                return (
                  i.immutable_data['Item Owner']?.toLowerCase().includes(pupname?.toLowerCase()) || // this filter is for pupitems
                  i.immutable_data['item owner']?.toLowerCase().includes(pupname?.toLowerCase()) || // this filter is for pupitems
                  i.immutable_data.name.toLowerCase().includes(pupname?.toLowerCase()) // filter for both puppycards and pupskincards
                );
              }

              return true;
            })
            .map((i, index) => (
              <ImageLightbox
                key={index}
                src={`https://atomichub-ipfs.com/ipfs/${i.immutable_data.img}`}
                alt={i.immutable_data.name}
                className={showOwned ? (templates?.includes(i.template_id) ? '' : 'grayscale') : ''}
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

          <GallerySetImages showOwned={showOwned} templates={templates ?? []} />
        </>
      )}
    </>
  );
};

export default GalleryImages;
