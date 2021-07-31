import CustomDisclosure from './disclosure';

const galleryCategories = ['Pupskin Cards', 'Pupitem Cards', 'Puppy Cards'];

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
  return (
    <div className="w-full flex flex-row md:flex-col flex-wrap justify-around items-start md:w-1/3 text-white bg-gray-800 p-4 rounded-lg">
      <CustomDisclosure title="Categories" className="mb-4">
        <ul>
          {galleryCategories.map((x, index) => (
            <li key={index}>
              <button
                className="text-sm md:text-base font-normal tracking-wide my-0.5"
                type="button"
              >
                {x}
              </button>
            </li>
          ))}
        </ul>
      </CustomDisclosure>

      <CustomDisclosure className="mb-4" title="Filter By">
        <ul className="flex items-center">
          {Object.entries(galleryPupRarities).map(([key, color]) => (
            <li key={key} className="mx-0.5">
              <button className={`${color} h-4 sm:h-5 w-4 sm:w-5 rounded-full`} type="button" />
            </li>
          ))}
        </ul>
      </CustomDisclosure>
    </div>
  );
};

export default GallerySidebar;
