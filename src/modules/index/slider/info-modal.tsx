import Image from 'next/image';
import { useState } from 'react';
import pupGroup from '../../../assets/rarities/pupgroup.png';
import pupNumber from '../../../assets/rarities/pupnumber.png';
import pupRarity from '../../../assets/rarities/puprarity.png';
import pupStats from '../../../assets/rarities/pupstats.png';
import BaseModal from '../../../components/modal';

const CardInfoModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden group-hover:flex absolute h-96 w-72 rounded-lg z-50 items-center justify-center">
      <BaseModal
        open={open}
        closeModal={() => setOpen(false)}
        className="bg-white rounded-lg p-6 max-w-4xl"
      >
        <div className="inline-flex flex-col items-center justify-center">
          <h2 className="font-alt font-bold text-3xl lg:text-4xl tracking-wide text-pastel-green uppercase">
            Card Rarities
          </h2>
          <div className="mt-0.5 py-0.5 rounded-full bg-pastel-green w-3/5"></div>
        </div>

        <p className="lg:text-lg mt-8">
          Everything you need to <strong>know about cards</strong>
        </p>

        <div>
          <div className="text-left lg:w-4/5 mx-auto mt-8">
            <p>
              Each collectible cards have their own identifiers to determine what rarity your card
              is, what pup you have, and what stats you have for your card. Scroll down to view all
              identifiers.
            </p>
          </div>

          <hr className="my-16 w-3/4 mx-auto" />

          <div>
            <h3 className="font-alt text-2xl uppercase text-pastel-green">Rarity Identifier</h3>
            <Image
              src={pupRarity}
              alt="Rarity identifier"
              height="150"
              width="400"
              objectFit="contain"
            />
            <div className="text-left lg:w-4/5 mx-auto mt-8">
              <p>
                WoC digital collectibles have 7 rarities: Common, Uncommon, Rare, Mythic, Cosmic,
                Ethereal and Special. The higher the rarity, the more valuable the card is. Each
                rarity has special colors assigned to them and can be found at the bottom of every
                card.
              </p>
            </div>
          </div>

          <hr className="my-16 w-3/4 mx-auto" />

          <div>
            <h3 className="font-alt text-2xl uppercase text-pastel-green">Stats Identifier</h3>

            <Image
              src={pupStats}
              alt="Stats identifier"
              height="150"
              width="500"
              objectFit="contain"
            />
            <div className="text-left lg:w-4/5 mx-auto mt-8">
              <p>
                Cards have stats to determine their overall strength. Agility and Power are used to
                measure the final strength of the card. The higher the stats, the higher the DPS.
                Stats can be found above the rarity.
              </p>

              <p className="italic my-6">What is DPS?</p>

              <p>
                DPS is the final rating of strength for cards. It is calculated by dividing the
                speed by 60 and multiplying it by the power. DPS is used for calculating your total
                strength and assigning you a puprank. Pups with high lbl pupranks get special
                rewards and benefits.
              </p>

              <p className="italic my-6">dps formula = (speed &divide; 60) &times; power</p>
            </div>
          </div>

          <hr className="my-16 w-3/4 mx-auto" />

          <div>
            <h3 className="font-alt text-2xl uppercase text-pastel-green">Group Identifier</h3>
            <Image
              src={pupGroup}
              alt="Group identifier"
              height="150"
              width="300"
              objectFit="contain"
            />
            <div className="text-left lg:w-4/5 mx-auto mt-8">
              <p>
                Group identifiers are simply a way to tell how many cards are in that group. They
                come in different shapes and symbols, and can differ from each other. Group
                identifiers are indicated above the name.
              </p>
              <p className="italic my-6">
                eg. The return of the void pups feature Noir. Five group identifiers are present in
                the card, which means there are 5 skins attainable for that drop.
              </p>
            </div>
          </div>

          <hr className="my-16 w-3/4 mx-auto" />
          <div>
            <h3 className="font-alt text-2xl uppercase text-pastel-green">Pupnumber Identifier</h3>
            <Image
              src={pupNumber}
              alt="Stats identifier"
              height="200"
              width="200"
              objectFit="contain"
            />
            <div className="text-left lg:w-4/5 mx-auto mt-8">
              <p>
                Everypup may have a skin, but every pup also has their own unique number! The oldest
                pup has a lower pup number while newer pups have higher pup numbers. Owning an older
                pup adds to the value of the card! Remember, pupnumbers are indentifiers to
                determine how old that pup has existed in puptown.
              </p>
              <p className="italic my-6">
                eg. Pupnumber 1, A.K.A Winter, was the first ever pup to exist in pup-town. Owning
                that puppycard would cost a fortune!
              </p>
            </div>
          </div>
        </div>
      </BaseModal>

      <button
        className="text-white bg-black/50 hover:bg-black/60 duration-300 py-2 px-8 rounded-lg font-bold"
        onClick={() => setOpen(true)}
      >
        click more here
      </button>
    </div>
  );
};

export default CardInfoModal;
