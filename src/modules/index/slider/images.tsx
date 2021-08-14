/* eslint-disable react/jsx-key */
import Image from 'next/image';
import commonPup from '../../../../public/images/common.png';
import cosmicPup from '../../../../public/images/cosmic.png';
import mythicPup from '../../../../public/images/mythic.png';
import rarePup from '../../../../public/images/rare.png';
import uncommonPup from '../../../../public/images/uncommon.png';

const PUP_IMAGES = [
  <Image src={commonPup} alt="Common Pup" />,
  // <Image src={cosmicPup} alt="Cosmic Pup" />,
  <Image src={mythicPup} alt="Mythic Pup" />,
  <Image src={rarePup} alt="Rare Pup" />,
  <Image src={uncommonPup} alt="Uncommon Pup" />
];

type ImageContainerProps = {
  image: JSX.Element;
};

const IMAGES: ImageContainerProps[] = [
  {
    image: (
      <Image
        src={commonPup}
        alt="Common Pup"
        objectFit="contain"
        layout="fill"
        placeholder="blur"
      />
    )
  },
  {
    image: (
      <Image
        src={cosmicPup}
        alt="Cosmic Pup"
        objectFit="contain"
        layout="fill"
        placeholder="blur"
      />
    )
  },
  {
    image: (
      <Image
        src={mythicPup}
        alt="Mythic Pup"
        objectFit="contain"
        layout="fill"
        placeholder="blur"
      />
    )
  },
  {
    image: (
      <Image src={rarePup} alt="Rare Pup" objectFit="contain" layout="fill" placeholder="blur" />
    )
  },
  {
    image: (
      <Image
        src={uncommonPup}
        alt="Uncommon Pup"
        objectFit="contain"
        layout="fill"
        placeholder="blur"
      />
    )
  }
];

const ImageCenter = ({ image }: ImageContainerProps) => {
  return (
    <div className="relative h-112 w-full drop-shadow-2xl">
      <div className="relative w-dull xl:w-4/5 mx-auto h-full bg-gray-50 rounded-xl"></div>
      {image}
    </div>
  );
};

const ImageSides = ({ image }: ImageContainerProps) => {
  return (
    <div className="hidden md:block relative h-72 w-full drop-shadow-2xl">
      <div className="relative w-2/3 xl:w-1/2 mx-auto h-full bg-gray-50 rounded-xl"></div>
      {image}
    </div>
  );
};

export { ImageCenter, ImageSides, IMAGES, PUP_IMAGES };
export type { ImageContainerProps };
