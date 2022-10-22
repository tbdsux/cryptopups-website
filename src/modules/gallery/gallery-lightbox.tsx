import Image from 'next/image';
import { useState } from 'react';
import { BasicLightbox } from 'unstyled-lightbox';

type ImageLightboxProps = {
  src: string;
  alt?: string;
  className?: string;
};
const ImageLightbox = ({ src, alt, className }: ImageLightboxProps) => {
  const [open, setOpen] = useState<ImageLightboxProps | undefined>(undefined);

  return (
    <>
      {open !== undefined && (
        <BasicLightbox
          open={open !== undefined}
          onClose={() => setOpen(undefined)}
          images={[open]}
          className="fixed w-full h-full bg-black/80 z-[99999] inset-0 flex items-center justify-center"
          overlayClassname="absolute h-full w-full z-30"
          arrowsClassName={{
            icons: '',
            buttons: 'h-6 w-6 text-white'
          }}
          imageClassName="h-screen w-4/5 mx-auto object-contain"
          hideArrowButtons
        />
      )}

      <Image
        onClick={() => setOpen({ src, alt })}
        src={src}
        alt={alt}
        height="300"
        width="200"
        className={`z-20 cursor-pointer ${className}`}
      />
    </>
  );
};

export default ImageLightbox;
