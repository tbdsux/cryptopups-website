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
        description="Calculate your DPS by entering your WAX wallet below"
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
