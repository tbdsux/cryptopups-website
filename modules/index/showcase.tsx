import Image from "next/image";
import Container from "../../components/container";
import Logo from "../../public/logo.png";

const Showcase = () => {
  return (
    <Container className="w-5/6 text-center py-32">
      <Image src={Logo} height="150" width="600" alt="World of CryptoPups" />
      <p className="text-lg leading-loose mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        reiciendis voluptates impedit esse corporis, perspiciatis similique
        earum exercitationem quod dicta unde ea? Harum ea aliquid asperiores
        ratione atque quibusdam aliquam!
      </p>
    </Container>
  );
};

export default Showcase;
