/* eslint-disable react/jsx-key */
import Image from "next/image";
import commonPup from "../../../public/images/common.png";
import cosmicPup from "../../../public/images/cosmic.png";
import mythicPup from "../../../public/images/mythic.png";
import rarePup from "../../../public/images/rare.png";
import uncommonPup from "../../../public/images/uncommon.png";

const PUP_IMAGES = [
  <Image src={commonPup} alt="Common Pup" />,
  <Image src={cosmicPup} alt="Cosmic Pup" />,
  <Image src={mythicPup} alt="Mythic Pup" />,
  <Image src={rarePup} alt="Rare Pup" />,
  <Image src={uncommonPup} alt="Uncommon Pup" />,
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
      />
    ),
  },
  {
    image: (
      <Image
        src={cosmicPup}
        alt="Cosmic Pup"
        objectFit="contain"
        layout="fill"
      />
    ),
  },
  {
    image: (
      <Image
        src={mythicPup}
        alt="Mythic Pup"
        objectFit="contain"
        layout="fill"
      />
    ),
  },
  {
    image: (
      <Image src={rarePup} alt="Rare Pup" objectFit="contain" layout="fill" />
    ),
  },
  {
    image: (
      <Image
        src={uncommonPup}
        alt="Uncommon Pup"
        objectFit="contain"
        layout="fill"
      />
    ),
  },
];

const ImageCenter = ({ image }: ImageContainerProps) => {
  return <div className="relative h-128 w-full">{image}</div>;
};

const ImageSides = ({ image }: ImageContainerProps) => {
  return <div className="relative h-72 w-full">{image}</div>;
};

export { ImageCenter, ImageSides, IMAGES, PUP_IMAGES };
export type { ImageContainerProps };
