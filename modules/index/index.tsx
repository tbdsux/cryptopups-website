import DefaultLayout from "../../layout/default";
import CardAnatomy from "./card-anatomy";
import CardsPackEvent from "./cards-pack";
import Showcase from "./showcase";
import GallerySlide from "./slider/gallery-slide";

const IndexPage = () => {
  return (
    <DefaultLayout title="Welcome">
      <Showcase />

      <CardsPackEvent />

      <hr />

      <CardAnatomy />

      <hr />

      <GallerySlide />
    </DefaultLayout>
  );
};

export default IndexPage;
