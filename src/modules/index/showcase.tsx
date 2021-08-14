import Image from 'next/image';
import LogoAdvent from '../../../public/logo-adventurers.png';
import Container from '../../components/container';
import { SocialIcons } from './social-icons';

const Showcase = () => {
  return (
    <div className="w-full bg-gray-900 relative">
      <Container className="relative w-5/6 text-center pt-40 pb-36 z-30">
        <Image src={LogoAdvent} height="225" width="500" alt="World of CryptoPups" />
        <p
          data-cy="showcase-text"
          className="text-xl text-gray-100 leading-loose mt-4 tracking-wide"
        >
          Welcome To <b>The World Of Cryptopups Adventures!</b> <br /> Collect, Trade, and Show off
          your World of Cryptopups Adventure Cards. Each pup has their own unique personality and
          ability. Collect Pup Items to increase puppy card DPS.
        </p>

        <div className="mt-12">
          <SocialIcons />
        </div>
      </Container>

      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full inset-0 z-20 object-cover"
        style={{ filter: 'brightness(20%)' }}
      >
        <source src="/pack_vid.mp4" />
      </video>
    </div>
  );
};

export default Showcase;
