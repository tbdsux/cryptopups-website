import Image from 'next/image';

type ImageLightboxProps = {
  src: string;
  alt?: string;
  className?: string;
};
const ImageLightbox = ({ src, alt, className }: ImageLightboxProps) => {
  return (
    <>
      {/* TODO: implement a lightbox modal in here */}

      <Image src={src} alt={alt ?? ''} height="300" width="200" className={`z-20 ${className}`} />
    </>
  );
};

export default ImageLightbox;
