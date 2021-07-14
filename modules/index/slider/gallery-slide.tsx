import { useRef, useState } from "react";
import { ImageCenter, ImageContainerProps, IMAGES, ImageSides } from "./images";

const GallerySlide = () => {
  const [prev, setPrev] = useState<ImageContainerProps>(IMAGES[0]);
  const [current, setCurrent] = useState<ImageContainerProps>(IMAGES[1]);
  const [next, setNext] = useState<ImageContainerProps>(IMAGES[2]);

  const prevBtn = useRef<HTMLButtonElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);

  const prevContainer = useRef<HTMLDivElement>(null);
  const nextContainer = useRef<HTMLDivElement>(null);
  const currentContainer = useRef<HTMLDivElement>(null);

  const prevFunc = () => {
    const isNextLast = IMAGES.indexOf(next) === IMAGES.length - 1;

    setPrev(current);
    setCurrent(next);
    setNext(isNextLast ? IMAGES[0] : IMAGES[IMAGES.indexOf(next) + 1]);
  };

  const nextFunc = () => {
    const isPrevZero = IMAGES.indexOf(prev) === 0;

    setPrev(
      isPrevZero ? IMAGES[IMAGES.length - 1] : IMAGES[IMAGES.indexOf(prev) - 1]
    );
    setCurrent(prev);
    setNext(current);
  };

  return (
    <div className="text-center">
      <h4 className="text-3xl font-black tracking-wide">Rarities</h4>
      <div className="flex items-center justify-center">
        <ImageSides image={prev.image} />

        <button ref={prevBtn} onClick={prevFunc}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </button>

        <ImageCenter image={current.image} />

        <button ref={nextBtn} onClick={nextFunc}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>

        <ImageSides image={next.image} />
      </div>
    </div>
  );
};

export default GallerySlide;
