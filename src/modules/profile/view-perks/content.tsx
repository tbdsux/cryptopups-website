import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { AtomichubImg, NeftyblocksImg } from '../../../lib/assets';
import { atomichubMarketplace, neftyblocks } from '../../../lib/links';
import { pupPerks } from './perks';

const getEtherealListColor = (index: number) => {
  if (index == 0) {
    return 'text-opaque-orange';
  }

  if (index == 1) {
    return 'text-opaque-pink';
  }

  return 'text-opaque-purple';
};

const ViewPerksContent = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center items-stretch relative">
        {pupPerks.map((p, index) => (
          <div
            key={index}
            className="w-80 m-8 rounded-[2rem] border border-gray-100 shadow-2xl px-6 py-16"
          >
            <div className="inline-flex flex-col items-center justify-center">
              <h2
                className={`font-alt font-bold text-3xl tracking-wide uppercase ${p.class.color}`}
              >
                {p.rank}
              </h2>
              <div
                className={`mt-0.5 py-0.5 rounded-full w-3/5 font-medium ${p.class.background}`}
              ></div>
            </div>

            <ul className="mt-6 mx-4">
              <ul className="">
                {p.perks.map((perk, ix) => (
                  <li
                    key={ix}
                    className="p-1 my-2 text-gray-700 font-medium flex items-start text-left"
                  >
                    {perk != '' ? (
                      <FontAwesomeIcon
                        icon={faPaw}
                        className={`text-xl mr-3 ${
                          p.rank != 'Eternity Pups' ? p.class.color : getEtherealListColor(ix)
                        }`}
                      />
                    ) : (
                      <></>
                    )}
                    {perk}
                  </li>
                ))}
              </ul>
            </ul>

            <div className={`flex flex-col items-end ${p.class.space}`}>
              <strong className={`text-5xl font-black italic ${p.class.color} px-2`}>
                {p.dps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              </strong>
              <span className="text-xl italic text-gray-500 px-2">dps required</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32">
        <div className="inline-flex flex-col items-center justify-center">
          <h2 className="font-alt font-bold text-4xl tracking-wide text-pastel-blue uppercase">
            Collect More Pups!
          </h2>
          <div className="mt-0.5 py-0.5 rounded-full bg-pastel-blue w-3/5"></div>
        </div>

        <div className="flex items-center justify-center flex-wrap mt-8">
          <a
            target="_blank"
            href={neftyblocks}
            rel="noreferrer"
            title="Neftyblocks Link"
            className="m-3 font-alt text-3xl tracking-wide font-bold flex items-center py-5 px-14 uppercase bg-pastel-blue bg-opacity-80 hover:bg-opacity-100 duration-300 rounded-3xl text-white"
          >
            <Image
              src={NeftyblocksImg}
              height="37"
              width="37"
              alt=""
              className="rounded-full"
              objectFit="contain"
            />
            <span className="ml-4">Neftyblocks</span>
          </a>

          <a
            target="_blank"
            href={atomichubMarketplace}
            rel="noreferrer"
            title="Atomichub Link"
            className="m-3 font-alt text-3xl tracking-wide font-bold flex items-center py-5 px-14 uppercase bg-pastel-yellow bg-opacity-80 hover:bg-opacity-100 duration-300 rounded-3xl text-white"
          >
            <Image
              src={AtomichubImg}
              height="37"
              width="37"
              alt=""
              className="rounded-full"
              objectFit="contain"
            />
            <span className="ml-4">Atomichub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewPerksContent;
