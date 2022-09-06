import Image from 'next/image';
import Background from '../../assets/background.png';
import Container from '../../components/container';
import { ArrowDown, Logo } from '../../lib/assets';

const Showcase = () => {
  return (
    <div className="w-full bg-pastel-purple relative">
      <Container className="relative w-5/6 2xl:w-3/4 3xl:w-1/2 text-center pt-56 pb-16 z-30">
        <Image
          src={Logo}
          height="225"
          width="625"
          alt="World of CryptoPups"
          className="object-contain"
        />

        <p
          data-cy="showcase-text"
          className="text-lg 2xl:text-xl text-stone-100 tracking-tight font-medium leading-loose"
        >
          <span className="mb-2 text-2xl 2xl:text-3xl font-bold">
            The cutest and most adorable pup collectibles in WAX
          </span>
          <br /> Collect, Trade, and Show off your World of Cryptopups Adventure Cards. <br />
          Each pup has their own unique personality and ability. Collect Pup Items to increase puppy
          card DPS.
        </p>

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

      {/* <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full inset-0 z-20 object-cover"
        style={{ filter: 'brightness(20%)' }}
      >
        <source src="/pack_vid.mp4" />
      </video> */}

      <Image
        src={Background}
        alt="World of Cryptopups"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        className="w-full h-full inset-0 z-20 brightness-50"
      />
    </div>
  );
};

export default Showcase;
