import Image from "next/image";
import Container from "../../components/container";
import cardPackImg from "../../public/_events/adventurers-pack.jpg";
import AdventurersPackSlide from "./events/adventurers-pack/cards-slide";

const CardsPackEvent = () => {
  return (
    <div className="py-24">
      <Container className="w-4/5 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:mr-12 mb-8 md:mb-0">
            <Image
              src={cardPackImg}
              alt="Card Packs"
              width="1800"
              height="1100"
            />
          </div>
          <div>
            <h3 className="text-4xl lg:text-5xl uppercase font-black tracking-wide">
              Adventurer&apos;s Pack
            </h3>
            <p className="text-base lg:text-lg tracking-wide mt-3">
              With over <b>100+ trading cards</b>, this will be the biggest
              cryptopups drop. 5 Packs will be available with 1 Free drop for
              pupskin holders and 1 Free whitelisted drop.
            </p>

            <button className="py-1 md:py-2 lg:py-3 px-12 lg:px-16 text-gray-100 bg-gray-600 hover:bg-gray-800 duration-300 rounded-full mt-4 inline-flex items-center text-sm lg:text-base mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 lg:h-6 w-4 lg:w-6"
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
          </div>
        </div>
        <p className="text-right tracking-wide">Time Left 00:00:00</p>
      </Container>

      <AdventurersPackSlide />
    </div>
  );
};

export default CardsPackEvent;
