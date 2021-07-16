import Image from "next/image";
import Container from "../../components/container";
import cardPackImg from "../../public/_events/adventurers-pack.jpg";
import AdventurersPackSlide from "./events/adventurers-pack/cards-slide";

const CardsPackEvent = () => {
  return (
    <div className="py-24">
      <Container className="w-4/5 flex items-center justify-between mb-12">
        <div className="mr-12">
          <Image
            src={cardPackImg}
            alt="Card Packs"
            width="1800"
            height="1100"
          />
        </div>
        <div>
          <h3 className="text-5xl uppercase font-black tracking-wide">
            Adventurer&apos;s Pack
          </h3>
          <p className="text-lg  tracking-wide mt-3">
            With over <b>100+ trading cards</b>, this will be the biggest
            cryptopups drop. 5 Packs will be available with 1 Free drop for
            pupskin holders and 1 Free whitelisted drop. <br />
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
            >
              <path
                fill="#F4900C"
                d="M35 19c0-2.062-.367-4.039-1.04-5.868-.46 5.389-3.333 8.157-6.335 6.868-2.812-1.208-.917-5.917-.777-8.164.236-3.809-.012-8.169-6.931-11.794 2.875 5.5.333 8.917-2.333 9.125-2.958.231-5.667-2.542-4.667-7.042-3.238 2.386-3.332 6.402-2.333 9 1.042 2.708-.042 4.958-2.583 5.208-2.84.28-4.418-3.041-2.963-8.333C2.52 10.965 1 14.805 1 19c0 9.389 7.611 17 17 17s17-7.611 17-17z"
              />
              <path
                fill="#FFCC4D"
                d="M28.394 23.999c.148 3.084-2.561 4.293-4.019 3.709-2.106-.843-1.541-2.291-2.083-5.291s-2.625-5.083-5.708-6c2.25 6.333-1.247 8.667-3.08 9.084-1.872.426-3.753-.001-3.968-4.007C7.352 23.668 6 26.676 6 30c0 .368.023.73.055 1.09C9.125 34.124 13.342 36 18 36s8.875-1.876 11.945-4.91c.032-.36.055-.722.055-1.09 0-2.187-.584-4.236-1.606-6.001z"
              />
            </svg>
          </p>

          <button className="py-3 px-16 text-gray-100 bg-gray-600 hover:bg-gray-800 duration-300 rounded-full mt-4 inline-flex items-center">
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

      <AdventurersPackSlide />
    </div>
  );
};

export default CardsPackEvent;
