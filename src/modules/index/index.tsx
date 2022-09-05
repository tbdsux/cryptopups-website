import { NextSeo } from 'next-seo';
import DefaultLayout from '../../layouts/default';
import ExternalLinks from './external-links';
import Faqs from './faqs';
import PupCommunity from './pup-community';
import PupLinks from './pup-links';
import CardRarities from './rarities';
import Showcase from './showcase';
import WhatThePup from './what-the-pup';

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

      <Showcase />

      <div id="content">
        <WhatThePup />

        <PupLinks />

        <CardRarities />

        <PupCommunity />

        <Faqs />

        <ExternalLinks />
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;
