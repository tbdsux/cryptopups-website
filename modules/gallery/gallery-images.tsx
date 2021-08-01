import Image from 'next/image';
import { useGallery } from './gallery-provider';
import pupcards from './pupcards.json';
import pupitems from './pupitems.json';
import pupskins from './pupskins.json';

const AllImages = [...pupcards, ...pupskins, ...pupitems];

const GalleryImages = () => {
  const { state } = useGallery();
  const { rarity, category } = state;

  return (
    <div className="w-full mt-8 md:mt-0 ml-0 md:ml-12 h-screen border border-warmGray-300 rounded-lg overflow-auto p-6">
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {AllImages.filter((i) => {
          if (category.length === 0) return true;

          return category.includes(i.category);
        })
          .filter((i) => {
            if (rarity.length === 0) return true;

            return rarity.includes(i.rarity);
          })
          .map((i, index) => (
            <li key={index}>
              <Image src={i.link} alt={i.name} height="300" width="200" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GalleryImages;
