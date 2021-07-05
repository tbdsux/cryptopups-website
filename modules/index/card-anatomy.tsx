import Container from "../../components/container";

const CardAnatomy = () => {
  return (
    <Container className="w-11/12 py-20">
      <h3 className="text-center text-4xl font-black tracking-wide">
        Card Anatomy
      </h3>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center justify-between w-1/2 mx-1">
          <div className="w-1/2">
            <h5 className="text-xl font-bold">Front</h5>
            <p className="text-lg tracking-wide mt-3 mr-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              exercitationem alias quasi necessitatibus impedit minus quam
              facilis laudantium eum id?
            </p>
          </div>
          <div className="border h-72 w-1/2"></div>
        </div>
        <div className="flex items-center justify-between w-1/2 mx-1">
          <div className="border h-72 w-1/2"></div>
          <div className="w-1/2 ml-4">
            <h5 className="text-xl font-bold">Back</h5>
            <p className="text-lg tracking-wide mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              dicta laudantium cupiditate libero voluptatibus reprehenderit
              dolorem nostrum eaque enim tempora!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardAnatomy;
