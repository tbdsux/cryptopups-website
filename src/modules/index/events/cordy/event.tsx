import Image from 'next/image';
import cordyImg from '../../../../../public/_events/cordy.png';
import cordyFree from '../../../../../public/_events/free-cordy.png';
import Container from '../../../../components/container';
import EventsTimer from '../timer';

const CordyEvent = () => {
  return (
    <div className="pt-24">
      <Container className="w-4/5 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:mr-24 mb-8 md:mb-0">
            <Image
              src={cordyImg}
              alt="Season One Pass"
              width="1200"
              height="700"
              placeholder="blur"
            />
          </div>
          <div>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl uppercase font-black tracking-wide text-warmGray-900">
              Cordy
            </h3>
            <p className="text-base lg:text-lg xl:text-xl tracking-wide mt-3 xl:mt-4 text-gray-700">
              Everyone, let&apos;s all welcome our new pup, <strong>Cordy</strong>!{' '}
              <strong>Cordy</strong> is a discord pup that is now dropping into your wallets to
              bring you gamer vibes!
            </p>

            <button className="py-2 lg:py-3 px-12 lg:px-16 text-gray-100 bg-gray-600 hover:bg-gray-800 duration-300 rounded-full mt-4 inline-flex items-center text-sm lg:text-base mb-8">
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
              <a
                href="https://events.worldofcryptopups.cf/cordy-drop"
                target="_blank"
                rel="noreferrer"
                className="ml-2 font-bold"
              >
                View Event
              </a>
            </button>
          </div>
        </div>

        <div className="float-right flex flex-col">
          <div className="inline-flex items-end my-1">
            <EventsTimer date="20 Aug 2021 04:00 PM UTC" duration={48} />
            <strong
              title="The Private Sale would be for all pups who now have claimed their Season Pass."
              className="ml-2 border-b border-dashed"
            >
              (Private Sale)
            </strong>
          </div>
          <div className="inline-flex items-end my-1">
            <EventsTimer date="21 Aug 2021 04:00 PM UTC" duration={48} />
            <strong
              title="The Public Sale would be, as it says, for everyone."
              className="ml-2 border-b border-dashed"
            >
              (Public Sale)
            </strong>
          </div>
        </div>
      </Container>

      <div className="pt-24">
        <a href="https://discord.gg/ZKEezUwzaB" rel="noreferrer" target="_blank">
          <Image
            src={cordyFree}
            alt="Free Cordy Pup! Only available for discord members."
            placeholder="blur"
          />
        </a>
      </div>
    </div>
  );
};

export default CordyEvent;
