import Image from 'next/image';
import eventImg from '../../../../public/_events/christmas-emotes.png';
import Container from '../../../components/container';
import EventsTimer from './timer';

const CurrentEventContainer = () => {
  return (
    <div className="pt-24">
      <Container className="w-4/5 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:mr-24 mb-8 md:mb-0">
            <Image
              src={eventImg}
              alt="Season One Pass"
              width="850"
              height="850"
              placeholder="blur"
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl uppercase font-black tracking-wide text-warmGray-900">
              Christmas Emotes
            </h3>
            <p className="text-base lg:text-lg xl:text-xl tracking-wide mt-3 xl:mt-4 text-gray-700">
              Four new collectible pupmoji cards will be dropping from Santa Theodore&apos;s sleigh.{' '}
              <br />
              Christmas pupmoji pack will be free to all who own 25 Cryptopup assets.
            </p>

            {/* <a
              href="https://events.worldofcryptopups.cf/smashkarts-tournament"
              target="_blank"
              rel="noreferrer"
              className="py-2 lg:py-3 px-12 lg:px-16 text-gray-100 bg-gray-600 hover:bg-gray-800 duration-300 rounded-full mt-4 inline-flex items-center text-sm lg:text-base mb-8"
            >
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>{' '}
              <span className="ml-2 font-bold">View Event</span>
            </a> */}
          </div>
        </div>

        <div className="float-right flex flex-col">
          <div className="inline-flex items-end my-1">
            <EventsTimer date="28 December 2021 17:00 UTC" duration={48} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CurrentEventContainer;
