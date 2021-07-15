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

        <button className="border py-3 px-16 text-gray-600 bg-gray-100 hover:bg-gray-300 duration-300 rounded-full mt-4 inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>{" "}
          <span className="ml-2 font-bold">BUY</span>
        </button>

        <p className="text-right tracking-wide">Time Left 00:00:00</p>
      </div>
    </Container>
  );
};

export default CardsPackEvent;
