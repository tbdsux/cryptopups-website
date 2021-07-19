import { NextSeo } from "next-seo";
import DefaultLayout from "../../layout/default";
import CardsPackEvent from "./cards-pack";
import Showcase from "./showcase";
import Rarities from "./slider/rarities";

const IndexPage = () => {
  return (
    <DefaultLayout>
      {/* start seo */}
      <NextSeo
        title="Welcome"
        description="Welcome To The World Of Cryptopups Adventures! Collect, Trade, and Show off your World of Cryptopups Adventure Cards. Each pup has their own unique personality and ability. Collect Pup Items to increase puppy card DPS."
        openGraph={{
          title: "Welcome",
          description:
            "Welcome To The World Of Cryptopups Adventures! Collect, Trade, and Show off your World of Cryptopups Adventure Cards. Each pup has their own unique personality and ability. Collect Pup Items to increase puppy card DPS.",
        }}
      />
      {/* end seo */}

      <Showcase />

      <CardsPackEvent />

      {/*
      hide this component since it is incomplete

      <hr />

      <CardAnatomy /> */}

      <hr />

      <Rarities />
    </DefaultLayout>
  );
};

export default IndexPage;
