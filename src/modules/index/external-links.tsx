import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { AtomichubImg, NeftyblocksImg } from '../../lib/assets';
import { atomichub, neftyblocks, twitter } from '../../lib/links';

const ExternalLinks = () => {
  return (
    <div className="py-32 w-5/6 2xl:w-4/5 3xl:w-2/3 mx-auto text-center">
      <div className="inline-flex flex-col items-center justify-center">
        <h2 className="font-alt font-bold text-4xl tracking-wide text-pastel-red uppercase">
          External Links
        </h2>
        <div className="mt-0.5 py-0.5 rounded-full bg-pastel-red w-3/5"></div>
      </div>

      <p className="lg:text-lg mt-8">View our collection page, drops, announcements and more</p>

      <div className="mt-12 font-medium w-4/5 mx-auto flex flex-wrap justify-center">
        <a
          target="_blank"
          href={atomichub}
          rel="noreferrer"
          title="Atomichub Link"
          className="m-3 font-bold flex items-center py-5 px-14 uppercase bg-pastel-red bg-opacity-80 hover:bg-opacity-100 duration-300 rounded-full text-white"
        >
          <Image
            src={AtomichubImg}
            height="37"
            width="37"
            alt=""
            className="rounded-full object-contain"
          />
          <span className="ml-2">Atomichub</span>
        </a>

        <a
          target="_blank"
          href={neftyblocks}
          rel="noreferrer"
          title="Neftyblocks Link"
          className="m-3 font-bold flex items-center py-5 px-14 uppercase bg-pastel-red bg-opacity-80 hover:bg-opacity-100 duration-300 rounded-full text-white"
        >
          <Image
            src={NeftyblocksImg}
            height="37"
            width="37"
            alt=""
            className="rounded-full object-contain"
          />
          <span className="ml-2">Neftyblocks</span>
        </a>

        <a
          target="_blank"
          href={twitter}
          rel="noreferrer"
          title="Twitter Link"
          className="m-3 font-bold flex items-center py-5 px-14 uppercase bg-pastel-red bg-opacity-80 hover:bg-opacity-100 duration-300 rounded-full text-white"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-3xl" />

          <span className="ml-2">Twitter</span>
        </a>
      </div>
    </div>
  );
};

export default ExternalLinks;
