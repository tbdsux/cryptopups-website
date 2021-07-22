import { faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { AllianceProps } from './alliance';
type TheAllianceSectionProps = {
  data: AllianceProps;
};
const TheAllianceSection = ({ data }: TheAllianceSectionProps) => {
  return (
    <section>
      <div className="w-full border rounded-xl shadow-xl">
        <div className="w-full h-56 flex flex-col relative items-center border-b">
          {data.banner ? (
            <Image
              src={data.banner}
              alt={`${data.name} - Banner`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          ) : (
            <div className="h-full w-full absolute bg-gray-300 rounded-t-xl"></div>
          )}
          <div className="absolute -bottom-10 border rounded-full inline-flex">
            <Image
              src={data.image}
              alt={data.name}
              height="100"
              width="100"
              className="absolute rounded-full border-2"
            />
          </div>
        </div>

        {/* {alliance links} */}
        <div className="my-12">
          <a
            href={data.links.twitter}
            title={`Go to ${data.name}'s Twitter`}
            className="hover:text-yellow-500"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="text-center text-xl font-black leading-loose truncate">@{data.name}</h3>
          </a>

          <div className="flex justify-center flex-wrap">
            {data.links.discord && (
              <a
                href={data.links.discord}
                target="_blank"
                rel="noreferrer"
                className="mx-1 group inline-flex items-center py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <FontAwesomeIcon icon={faDiscord} className="text-xl mr-1" /> <span>Discord</span>
              </a>
            )}

            {data.links.telegram && (
              <a
                href={data.links.telegram}
                target="_blank"
                rel="noreferrer"
                className="mx-1 group inline-flex items-center py-2 px-4 rounded-full bg-lightBlue-600 hover:bg-lightBlue-700 text-white"
              >
                <FontAwesomeIcon icon={faTelegram} className="text-xl mr-1" /> <span>Telegram</span>
              </a>
            )}

            {data.links.website && (
              <a
                href={data.links.website}
                target="_blank"
                rel="noreferrer"
                className="mx-1 group inline-flex items-center py-2 px-4 rounded-full bg-gray-600 hover:bg-gray-700 text-white"
              >
                <FontAwesomeIcon icon={faGlobe} className="text-xl mr-1" /> <span>Website</span>
              </a>
            )}

            {data.links.nefty && (
              <a
                href={data.links.nefty}
                target="_blank"
                rel="noreferrer"
                className="mx-1 group inline-flex items-center py-2 px-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white"
              >
                <Image
                  src="https://neftyblocks.com/apple-touch-icon.png"
                  alt="NeftyBlocks"
                  height="20"
                  width="20"
                  className="mr-1"
                />{' '}
                <span>NeftyBlocks</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheAllianceSection;
