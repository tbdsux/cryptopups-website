import { NextSeo } from 'next-seo';
import DefaultLayout from '../../layouts/default';
import DiscoverContainer from './discover';
import CurrentEventModal from './events/current-event-modal';
import SmashKartsTournamentEvent from './events/smash-karts/event';
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

      <div className="py-28">
        <h2 className="text-center text-4xl font-black trackin-wide text-warmGray-800 pb-8">
          World of Cryptopups Events
        </h2>
        <hr className="border-gray-200 w-5/6 mx-auto" />

        <SmashKartsTournamentEvent />
      </div>

      {/*
      hide this component since it is incomplete

      <hr />

      <CardAnatomy /> */}

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
