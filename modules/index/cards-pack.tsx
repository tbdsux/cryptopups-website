import Image from "next/image";
import Container from "../../components/container";
import cardPackImg from "../../public/images/card_pack.png";

const CardsPackEvent = () => {
  return (
    <Container className="w-4/5 flex items-center justify-between py-24">
      <Image src={cardPackImg} alt="Card Packs" height="2200" />
      <div>
        <h3 className="text-5xl uppercase font-black tracking-wide">
          CARD Pack
        </h3>
        <p className="text-lg  tracking-wide mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          vitae, iure exercitationem iste commodi obcaecati maiores facere esse
          qui, beatae officia alias perspiciatis quaerat animi sint ipsa unde,
          nisi accusantium?
        </p>

        <button className="border py-2 px-16 rounded-full mt-4">BUY</button>

        <p className="text-right">Time Left 00:00:00</p>
      </div>
    </Container>
  );
};

export default CardsPackEvent;
