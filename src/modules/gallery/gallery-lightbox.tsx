import Image from 'next/image';
import { useState } from 'react';
import { BasicLightbox } from 'unstyled-lightbox';

type ImageLightboxProps = {
  src: string;
  alt?: string;
};
const ImageLightbox = ({ src, alt }: ImageLightboxProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BasicLightbox
        open={open}
        onClose={() => setOpen(false)}
        images={[{ src, alt }]}
        className="fixed w-full h-full bg-black/80 z-50 inset-0 flex items-center justify-center"
        containerClassname="z-50 flex items-center justify-between"
        overlayClassname="absolute h-full w-full z-30"
        arrowsClassName={{
          icons: '',
          buttons: 'h-6 w-6 text-white'
        }}
        imageClassName="mx-4 h-screen"
        hideArrowButtons
      />

      <Image onClick={() => setOpen(true)} src={src} alt={alt} height="300" width="200" />
    </>
  );
};

export default ImageLightbox;
