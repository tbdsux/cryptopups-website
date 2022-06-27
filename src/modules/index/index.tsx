import { NextSeo } from 'next-seo';
import DefaultLayout from '../../layouts/default';
import AboutProject from './about-project';
import CurrentEventModal from './events/current-event-modal';
import OurLinks from './links';
import NewRarity from './new-rarity';
import Showcase from './showcase';
import Rarities from './slider/rarities';

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

      <AboutProject />

      <NewRarity />

      <hr className="w-11/12 mx-auto" />

      <Rarities />

      <hr />

      <OurLinks />
    </DefaultLayout>
  );
};

export default IndexPage;
