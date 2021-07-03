import Container from "../../components/container";

const CardsPackEvent = () => {
  return (
    <Container className="w-4/5 flex items-center justify-between py-20">
      <div className="w-2/5"></div>
      <div className="w-3/5">
        <h3 className="text-3xl">CARD Pack</h3>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          vitae, iure exercitationem iste commodi obcaecati maiores facere esse
          qui, beatae officia alias perspiciatis quaerat animi sint ipsa unde,
          nisi accusantium?
        </p>

        <button>BUY</button>

        <p className="text-right">Time Left 00:00:00</p>
      </div>
    </Container>
  );
};

export default CardsPackEvent;
