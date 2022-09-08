import Image from 'next/image';
import Background from '../../assets/background.png';
import Container from '../../components/container';
import { ArrowDown, Logo } from '../../lib/assets';

const Showcase = () => {
  return (
    <div className="w-full bg-pastel-purple relative">
      <Container className="relative w-5/6 2xl:w-3/4 3xl:w-1/2 text-center pt-64 pb-24 z-30">
        <Image
          src={Logo}
          height="125"
          width="525"
          alt="World of CryptoPups"
          className="object-contain"
        />

        <div
          data-cy="showcase-text"
          className="text-lg 2xl:text-xl text-stone-100 tracking-tight font-semibold leading-loose mt-12"
        >
          <span className="text-2xl 2xl:text-3xl font-bold">
            The cutest and most adorable pup collectibles in WAX
          </span>
          <p className="mt-4 lg:w-5/6 mx-auto">
            Have you ever seen the cutest pup collection in WAX? Now you have. The World of
            Cryptopups brings you unbelievably cute collectible trading cards that will make your
            squirm! Hop right into the fun and join the puppy madness, exciting stuff awaits,
            literally exciting.
          </p>
        </div>

        <div className="mt-40">
          <a
            href="#content"
            className="animate-[bounce_2s_infinite] text-sm font-bold inline-flex flex-col items-center text-white"
          >
            <span className="mb-2">Exciting Stuff</span>
            <Image src={ArrowDown} alt="" height={20} width={25} className="" />
          </a>
        </div>
      </Container>

      <Image
        src={Background}
        alt="World of Cryptopups"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        className="w-full h-full inset-0 z-20"
      />
    </div>
  );
};

export default Showcase;
