import { NextSeo } from 'next-seo';
import Image from 'next/image';
import ElementalsBg from '../../../public/elementals.jpg';
import DefaultLayout from '../../layouts/default';
import DiscoverContainer from './discover';
import CurrentEventModal from './events/current-event-modal';
import RacerShibaEvent from './events/racer-shiba/event';
import ExternalLinks from './external-links';
import NewRarity from './new-rarity';
import Showcase from './showcase';
import Rarities from './slider/rarities';
import { SocialContainer } from './social-icons';

const IndexPage = () => {
  return (
    <DefaultLayout>
      {/* start seo */}
      <NextSeo
        title="Welcome"
        description="Welcome To The World Of Cryptopups Adventures! Collect, Trade, and Show off your World of Cryptopups Adventure Cards. Each pup has their own unique personality and ability. Collect Pup Items to increase puppy card DPS."
        openGraph={{
          title: 'Welcome',
          description:
            'Welcome To The World Of Cryptopups Adventures! Collect, Trade, and Show off your World of Cryptopups Adventure Cards. Each pup has their own unique personality and ability. Collect Pup Items to increase puppy card DPS.'
        }}
      />
      {/* end seo */}

      {/* current event modal */}
      <CurrentEventModal />

      <Showcase />

      <DiscoverContainer />

      <hr />

      <NewRarity />

      <hr />

      <div className="py-28">
        <div className="2xl:w-5/6 3xl:w-3/4 mx-auto">
          <h2 className="text-center text-4xl font-black trackin-wide text-warmGray-800 pb-8">
            World of Cryptopups Events
          </h2>
          <hr className="border-gray-200 w-5/6 mx-auto" />

          <RacerShibaEvent />
        </div>
      </div>

      <div className="relative">
        <div className="py-20 w-5/6 mx-auto relative z-30">
          <a
            title="See Elementals Project"
            href="https://elementals.worldofcryptopups.cf/"
            target="_blank"
            rel="noreferrer"
            className="text-white relative"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-black text-5xl">Elemental Pups</h3>
            </div>
          </a>
        </div>
        <Image
          src={ElementalsBg}
          alt="World of Cryptopups"
          layout="fill"
          className="w-full h-full inset-0 z-20 object-cover brightness-20"
        />
      </div>

      {/*
      hide this component since it is incomplete

      <hr />

      <CardAnatomy /> */}

      <ExternalLinks />

      <hr className="w-11/12 mx-auto" />

      <Rarities />

      <hr />

      <div>
        <hr />
        <SocialContainer />
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;
