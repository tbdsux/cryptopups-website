import Image from "next/image";
import Container from "../../components/container";
import cosmicPup from "../../public/images/cosmic.png";

const CardAnatomy = () => {
  return (
    <Container className="w-5/6 py-20">
      <h3 className="text-center text-3xl lg:text-4xl font-black tracking-wide">
        Card Anatomy
      </h3>

      <div className="mt-8 flex flex-col md:flex-row  items-center justify-between">
        <div className="w-11/12 sm:w-3/4 md:w-1/2 mr-8">
          <h5 className="text-xl font-bold">Front</h5>
          <p className="text-lg tracking-wide mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            exercitationem alias quasi necessitatibus impedit minus quam facilis
            laudantium eum id?
          </p>
        </div>

        <div className="w-1/2 lg:w-full my-4 md:my-0">
          <Image src={cosmicPup} width="500" height="750" alt="Cards Anatomy" />
        </div>

        <div className="w-11/12 sm:w-3/4 md:w-1/2 ml-8">
          <h5 className="text-xl font-bold">Back</h5>
          <p className="text-lg tracking-wide mt-3">
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
