import Image from 'next/image';
import seasonPassImg from '../../../../../public/_events/season-pass.png';
import Container from '../../../../components/container';
import EventsTimer from '../timer';

const SeasonPassEvent = () => {
  return (
    <div className="py-24">
      <Container className="w-4/5 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:mr-24 mb-8 md:mb-0">
            <Image
              src={seasonPassImg}
              alt="Season One Pass"
              width="1200"
              height="700"
              placeholder="blur"
            />
          </div>
          <div>
            <h3 className="text-4xl lg:text-5xl uppercase font-black tracking-wide text-warmGray-900">
              Season One Pass
            </h3>
            <p className="text-base lg:text-lg tracking-wide mt-3 text-gray-700">
              Having this pass would allow you to claim your rewards and discounts based on your
              rank! Enjoy the <strong>Adventure</strong>!
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
                href="https://events.worldofcryptopups.cf/season-one-pass"
                target="_blank"
                rel="noreferrer"
                className="ml-2 font-bold"
              >
                View Event
              </a>
            </button>
          </div>
        </div>
        <EventsTimer date="Sat, 14 Aug 2021 03:00 PM GMT" duration={48} />
      </Container>
    </div>
  );
};

export default SeasonPassEvent;
