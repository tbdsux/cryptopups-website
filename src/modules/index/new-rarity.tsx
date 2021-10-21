import Image from 'next/image';
import SpecialCard from '../../../public/images/new-rarity.png';

const NewRarity = () => {
  return (
    <div className="py-20 bg-warmGray-100">
      <div className="w-5/6 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <Image src={SpecialCard} height="500" width="400" objectFit="contain" alt="" />
        <div className="mb-12 md:mb-0 w-full md:w-1/2">
          <span className="bg-lightBlue-400 text-white italic font-bold py-1 px-5 rounded-lg">
            SPECIAL
          </span>
          <div className="mt-8">
            <h3 className="text-5xl font-black tracking-wide uppercase">New Rarity</h3>
            <p className="mt-4 text-lg tracking-wide">
              A new card Rarity is now being released. Special Rarity Pupskin card will be
              distributed to all who joined the World of Cryptopups Smash Karts tournament.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRarity;
