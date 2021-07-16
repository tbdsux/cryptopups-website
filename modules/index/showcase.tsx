import Image from "next/image";
import Container from "../../components/container";
import Logo from "../../public/logo.png";
import SocialIcons from "./social-icons";

const Showcase = () => {
  return (
    <div className="w-full bg-gray-900 relative">
      <Container className="relative w-5/6 text-center py-36 z-40">
        <Image src={Logo} height="225" width="500" alt="World of CryptoPups" />
        <p className="text-xl text-gray-100 leading-loose mt-4 tracking-wide">
          Welcome To The World Of Cryptopups Adventures! <br /> Collect, Trade,
          and Show off your World of Cryptopups Adventure Cards. Each pup has
          their own unique personality and ability. Collect Pup Items to
          increase puppy card DPS. <br /> Join our Discord Server and level up
          to unlock airdrop channels, exp rooms, trading rooms, and free item
          drops.
        </p>

        <div className="mt-12">
          <SocialIcons />
        </div>
      </Container>

      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full inset-0 z-30 object-cover"
        style={{ filter: "brightness(20%)" }}
      >
        <source src="/pack_vid.mp4" />
      </video>
    </div>
  );
};

export default Showcase;
