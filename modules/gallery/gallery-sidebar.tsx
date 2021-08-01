import CustomDisclosure from './disclosure';
import { useGallery } from './gallery-provider';

const galleryCategories = [
  {
    key: 'pupskins',
    name: 'Pupskin Cards'
  },
  {
    key: 'pupitems',
    name: 'Pupitem Cards'
  },
  {
    key: 'pupcards',
    name: 'Puppy Cards'
  }
];

const galleryPupRarities = {
  common: 'bg-gray-500',
  uncommon: 'bg-green-500',
  rare: 'bg-blue-500',
  mythic: 'bg-purple-500',
  cosmic: 'bg-red-500',
  ethereal: 'bg-yellow-500',
  special: 'bg-teal-500'
};

const GallerySidebar = () => {
  const { state, dispatch } = useGallery();
  const { rarity, category } = state;

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
      </CustomDisclosure>
    </div>
  );
};

export default GallerySidebar;
