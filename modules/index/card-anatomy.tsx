import Image from "next/image";
import Container from "../../components/container";
import cosmicPup from "../../public/images/cosmic.png";

const CardAnatomy = () => {
  return (
    <Container className="w-5/6 py-20">
      <h3 className="text-center text-3xl lg:text-4xl font-black tracking-wide text-warmGray-900">
        Card Anatomy
      </h3>

      <div className="mt-8 flex flex-col md:flex-row  items-center justify-between">
        <div className="w-11/12 sm:w-3/4 md:w-1/2 mr-4">
          <h5 className="text-xl font-bold text-warmGray-800">Front</h5>
          <p className="text-lg tracking-wide mt-3 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            exercitationem alias quasi necessitatibus impedit minus quam facilis
            laudantium eum id?
          </p>
        </div>

        <div className="w-1/2 lg:w-full my-4 md:my-0 inline-flex justify-center">
          <Image src={cosmicPup} width="400" height="650" alt="Cards Anatomy" />
        </div>

        <div className="w-11/12 sm:w-3/4 md:w-1/2 ml-4">
          <h5 className="text-xl font-bold text-warmGray-800">Back</h5>
          <p className="text-lg tracking-wide mt-3 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dicta
            laudantium cupiditate libero voluptatibus reprehenderit dolorem
            nostrum eaque enim tempora!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CardAnatomy;
