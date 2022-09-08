/* eslint-disable react/jsx-key */
import Image from 'next/image';
import { useState } from 'react';
import cosmicPup from '../../../../public/images/cosmic.png';
import etherealPup from '../../../../public/images/ethereal.png';
import mythicPup from '../../../../public/images/mythic.png';
import rarePup from '../../../../public/images/rare.png';
import uncommonPup from '../../../../public/images/uncommon.png';

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
        objectFit="contain"
        layout="fill"
        placeholder="blur"
        className="z-40"
      />
    )
  },
  {
    image: (
      <Image
        src={rarePup}
        alt="Rare Pup"
        objectFit="contain"
        layout="fill"
        placeholder="blur"
        className="z-40"
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
        className="z-40"
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
        className="z-40"
      />
    )
  },
  {
    image: (
      <Image
        src={etherealPup}
        alt="Ethereal Pup"
        objectFit="contain"
        layout="fill"
        placeholder="blur"
        className="z-40"
      />
    )
  }
];

const ImageCenter = ({ image }: ImageContainerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-128 w-full drop-shadow-2xl group flex items-center justify-center">
      {/* TODO:: 
       <div className="hidden group-hover:flex absolute h-96 w-72 rounded-lg z-50 items-center justify-center">
        <BaseModal
          open={open}
          closeModal={() => setOpen(false)}
          className="bg-white rounded-lg p-6 max-w-md"
        >
          <h2>hello</h2>
        </BaseModal>

        <button
          className="text-white bg-black/50 hover:bg-black/60 duration-300 py-2 px-8 rounded-lg font-bold"
          onClick={() => setOpen(true)}
        >
          click more here
        </button>
      </div> */}
      {image}
    </div>
  );
};

const ImageSides = ({ image }: ImageContainerProps) => {
  return <div className="hidden lg:block relative h-72 w-full drop-shadow-2xl">{image}</div>;
};

export { ImageCenter, ImageSides, IMAGES, PUP_IMAGES };
export type { ImageContainerProps };

