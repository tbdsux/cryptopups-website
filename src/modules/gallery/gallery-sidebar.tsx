import { ImagesTemplateProps } from '../../types/template';
import CustomDisclosure from './disclosure';
import { useGallery } from './gallery-provider';

const galleryCategories = [
  {
    key: 'pupskincards',
    name: 'Pupskin Cards'
  },
  {
    key: 'pupitems',
    name: 'Pupitem Cards'
  },
  {
    key: 'puppycards',
    name: 'Puppy Cards'
  }
];

const galleryPupRarities = {
  common: 'bg-gray-500',
  uncommon: 'bg-green-500',
  rare: 'bg-blue-500',
  mythic: 'bg-purple-500',
  cosmic: 'bg-red-500',
  ethereal: 'ethereal',
  special: 'bg-teal-500'
};

type GallerySidebarProps = {
  images: ImagesTemplateProps[] | null | false | undefined;
};

const GallerySidebar = ({ images }: GallerySidebarProps) => {
  const { state, dispatch } = useGallery();
  const { rarity, category, names } = state;

  return (
    <div className="w-full flex flex-row md:flex-col flex-wrap justify-around items-start md:w-1/3 text-white bg-gray-800 p-4 rounded-lg">
      <CustomDisclosure title="Categories" className="mb-4">
        <ul>
          {galleryCategories.map((x, index) => (
            <li key={index}>
              <button
                className={`text-sm md:text-base font-normal tracking-wide my-0.5 ${
                  category.includes(x.key) && 'underline'
                }`}
                type="button"
                title={`Show ${x.name}`}
                onClick={() => {
                  if (category.includes(x.key)) {
                    dispatch({ type: 'removeCategory', item: x.key });
                    return;
                  }

                  dispatch({ type: 'addCategory', item: x.key });
                }}
              >
                {x.name}
              </button>
            </li>
          ))}
        </ul>
      </CustomDisclosure>

      <CustomDisclosure className="mb-4" title="Filter By">
        <div className="my-2">
          <h5 className="mb-1 uppercase text-sm">Rarity</h5>
          <hr className="border-gray-700" />
          <ul className="flex items-center">
            {Object.entries(galleryPupRarities).map(([key, color]) => (
              <li key={key} className="mx-0.5">
                <button
                  className={`${color} h-4 sm:h-5 w-4 sm:w-5 rounded-full ${
                    rarity.includes(key) && 'border-2'
                  }`}
                  title={key}
                  type="button"
                  onClick={() => {
                    if (rarity.includes(key)) {
                      dispatch({ type: 'removeRarity', item: key });
                      return;
                    }

                    dispatch({ type: 'addRarity', item: key });
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h5 className="mb-1 uppercase text-sm">Pup Name</h5>
          <hr className="border-gray-700" />
          <ul className="overflow-auto h-56">
            {images === false ? (
              <p>Failed to load puppers.</p>
            ) : images === null ? (
              <p>Loading...</p>
            ) : (
              images
                ?.filter((i) => i.schema.schema_name === 'puppycards')
                .map((x, index) => (
                  <li key={index}>
                    <button
                      className={`text-sm md:text-base font-normal tracking-wide my-0.5 ${
                        names.includes(x.name.toLowerCase()) && 'underline'
                      }`}
                      type="button"
                      title={`Show ${x.name}`}
                      onClick={() => {
                        if (names.includes(x.name.toLowerCase())) {
                          dispatch({ type: 'removeNames', item: x.name.toLowerCase() });
                          return;
                        }

                        dispatch({ type: 'addNames', item: x.name.toLowerCase() });
                      }}
                    >
                      {x.name}
                    </button>
                  </li>
                ))
            )}
          </ul>
        </div>
      </CustomDisclosure>
    </div>
  );
};

export default GallerySidebar;
