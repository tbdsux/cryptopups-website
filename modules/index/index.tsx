import DefaultLayout from "../../layout/default";
import CardAnatomy from "./card-anatomy";
import CardsPackEvent from "./cards-pack";
import Showcase from "./showcase";

const IndexPage = () => {
  return (
    <DefaultLayout title="Welcome">
      <Showcase />

      <CardsPackEvent />

      <CardAnatomy />
    </DefaultLayout>
  );
};

export default IndexPage;
