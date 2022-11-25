/* eslint-disable react/jsx-key */
import Image from 'next/image';
import cosmicPup from '../../../../public/images/cosmic.png';
import etherealPup from '../../../../public/images/ethereal.png';
import mythicPup from '../../../../public/images/mythic.png';
import rarePup from '../../../../public/images/rare.png';
import uncommonPup from '../../../../public/images/uncommon.png';
import CardInfoModal from './info-modal';

const PUP_IMAGES = [
  <Image src={uncommonPup} alt="Uncommon Pup" />,
  <Image src={rarePup} alt="Rare Pup" />,
  <Image src={mythicPup} alt="Mythic Pup" />,
  <Image src={cosmicPup} alt="Mythic Pup" />,
  <Image src={etherealPup} alt="Mythic Pup" />
];

type ImageContainerProps = {
  image: JSX.Element;
};

const IMAGES: ImageContainerProps[] = [
  {
    image: (
      <Image
        src={uncommonPup}
        alt="Uncommon Pup"
        fill
        placeholder="blur"
        className="z-40 object-contain"
      />
    )
  },
  {
    image: (
      <Image src={rarePup} alt="Rare Pup" fill placeholder="blur" className="z-40 object-contain" />
    )
  },
  {
    image: (
      <Image
        src={mythicPup}
        alt="Mythic Pup"
        fill
        placeholder="blur"
        className="z-40 object-contain"
      />
    )
  },
  {
    image: (
      <Image
        src={cosmicPup}
        alt="Cosmic Pup"
        fill
        placeholder="blur"
        className="z-40 object-contain"
      />
    )
  },
  {
    image: (
      <Image
        src={etherealPup}
        alt="Ethereal Pup"
        fill
        placeholder="blur"
        className="z-40 object-contain"
      />
    )
  }
];

const ImageCenter = ({ image }: ImageContainerProps) => {
  return (
    <div className="relative h-128 w-full drop-shadow-2xl group flex items-center justify-center">
      <CardInfoModal />
      {image}
    </div>
  );
};

const ImageSides = ({ image }: ImageContainerProps) => {
  return <div className="hidden lg:block relative h-72 w-full drop-shadow-2xl">{image}</div>;
};

export { ImageCenter, ImageSides, IMAGES, PUP_IMAGES };
export type { ImageContainerProps };
