import Image from 'next/image';
import { useGallery } from './gallery-provider';
import { GalleryImagesProps } from './images';
import pupcards from './pupcards.json';
import pupitems from './pupitems.json';
import pupskins from './pupskins.json';

const AllImages: GalleryImagesProps[] = [...pupcards, ...pupskins, ...pupitems];

const GalleryImages = () => {
  const { state } = useGallery();
  const { rarity, category, names } = state;

  return (
    <div className="w-full mt-8 md:mt-0 ml-0 md:ml-12 h-172 lg:h-200 border border-warmGray-300 rounded-lg overflow-auto p-6">
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-8 gap-6">
        {AllImages.filter((i) => {
          if (category.length === 0) return true;

          return category.includes(i.category);
        })
          .filter((i) => {
            if (rarity.length === 0) return true;

            return rarity.includes(i.rarity);
          })
          .filter((i) => {
            if (names.length === 0) return true;

            for (const f of names) {
              if (i.category === 'pupitems') {
                if (i.owner?.toLowerCase().includes(f)) {
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
            <li key={index}>
              <Image src={i.link} alt={i.name} height="300" width="200" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GalleryImages;
