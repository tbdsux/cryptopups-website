import DefaultLayout from "../../layout/default";
import CardsPackEvent from "./cards-pack";
import Showcase from "./showcase";
import Rarities from "./slider/rarities";

const IndexPage = () => {
  return (
    <DefaultLayout title="Welcome">
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
