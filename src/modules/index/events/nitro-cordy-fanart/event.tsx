import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import eventWinner from '../../../../../public/_events/nitro-cordy-fanart-winner.png';
import eventImg from '../../../../../public/_events/nitro-cordy-fanart.png';
import Container from '../../../../components/container';
import EventsTimer from '../timer';

const NitroCordyFanart = () => {
  return (
    <div className="pt-12">
      <Image src={eventWinner} alt="Nitro Cordy Fanart Winner" className="h-full w-full" />

      <Container className="w-4/5 my-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:mr-24 mb-8 md:mb-0">
            <Image
              src={eventImg}
              alt="Nitro Cordy Fanart"
              width="1100"
              height="700"
              placeholder="blur"
            />
          </div>
          <div>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl uppercase font-black tracking-wide text-warmGray-900">
              Nitro Cordy Fanart
            </h3>
            <p className="text-base lg:text-lg xl:text-xl tracking-wide mt-3 xl:mt-4 text-gray-700">
              One of the the biggest <strong>FANART</strong> contest open for everyone in the
              discord server.
            </p>

            <button className="py-2 lg:py-3 px-12 lg:px-16 text-gray-100 bg-gray-600 hover:bg-gray-800 duration-300 rounded-full mt-4 inline-flex items-center text-sm lg:text-base mb-8">
              <a
                href="https://discord.gg/ZKEezUwzaB"
                target="_blank"
                rel="noreferrer"
                className="ml-2 inline-flex items-center"
              >
                <FontAwesomeIcon icon={faDiscord} className="text-2xl mr-2" />
                Join Discord Server
              </a>
            </button>
          </div>
        </div>

        <EventsTimer date="Sun, 29 Aug 2021 02:00 PM GMT" duration={72} />
      </Container>
    </div>
  );
};

export default NitroCordyFanart;
