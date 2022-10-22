import { useWaxUser } from '@cryptopuppie/next-waxauth';
import useGetSetImages from '../../hooks/useGetSetImages';
import { atomicMarket } from '../../lib/config';
import ImageLightbox from './gallery-lightbox';

interface GallerySetImagesProps {
  templates: string[];
  showOwned: boolean;
}

const GallerySetImages = ({ templates, showOwned }: GallerySetImagesProps) => {
  const { isLoggedIn } = useWaxUser();
  const setImages = useGetSetImages();

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-8 gap-6 justify-center ">
        {setImages?.map((i, index) => (
          <li key={index} className="relative group">
            {isLoggedIn && showOwned && !templates?.includes(i.template_id) ? (
              <div className="absolute w-full h-full hidden group-hover:flex items-center justify-center z-30">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black/80 py-1 px-3 rounded-lg text-sm text-white"
                  href={`${atomicMarket}?template_id=${i.template_id}`}
                >
                  view in market
                </a>
              </div>
            ) : (
              <></>
            )}

            <ImageLightbox
              src={`https://atomichub-ipfs.com/ipfs/${i.immutable_data.img}`}
              alt={i.immutable_data.name}
              className={
                isLoggedIn && showOwned
                  ? templates?.includes(i.template_id)
                    ? ''
                    : 'grayscale'
                  : ''
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GallerySetImages;
