import Image from 'next/image';
import { useReducer } from 'react';
import Container from '../../components/container';
import { ArrowSides } from '../../lib/assets';
import { ImageCenter, ImageSides } from './slider/images';
import { GallerySlideReducer, initGallerySlideReducer } from './slider/images-reducer';

const CardRarities = () => {
  const [state, dispatch] = useReducer(GallerySlideReducer, initGallerySlideReducer);

  return (
    <div className="py-32 w-5/6 2xl:w-4/5 3xl:w-2/3 mx-auto text-center">
      <div className="inline-flex flex-col items-center justify-center">
        <h2 className="font-alt font-bold text-4xl tracking-wide text-pastel-green uppercase">
          Card Rarities
        </h2>
        <div className="mt-0.5 py-0.5 rounded-full bg-pastel-green w-3/5"></div>
      </div>

      <p className="text-lg mt-8">
        What is a dps? <strong>Learn about it here</strong>
      </p>

      <Container className="w-full sm:w-2/3 md:w-full xl:w-11/12">
        <div className="flex items-center justify-center mt-8">
          <button
            className="p-2 rounded-full text-pastel-green bg-pastel-green bg-opacity-10 hover:bg-opacity-30 duration-300 flex items-center justify-center"
            onClick={() => dispatch({ type: 'prev' })}
          >
            <div className="relative h-6 w-6">
              <Image
                src={ArrowSides}
                alt=""
                layout="fill"
                objectFit="contain"
                className="scale-x-[-1]"
              />
            </div>
          </button>

          <ImageSides image={state.prev?.image} />

          <ImageCenter image={state.current?.image} />

          <ImageSides image={state.next?.image} />

          <button
            className="p-2 rounded-full text-pastel-green bg-pastel-green bg-opacity-10 hover:bg-opacity-30 duration-300 flex items-center justify-center"
            onClick={() => dispatch({ type: 'next' })}
          >
            <div className="relative h-6 w-6">
              <Image src={ArrowSides} alt="" layout="fill" objectFit="contain" className="" />
            </div>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CardRarities;
