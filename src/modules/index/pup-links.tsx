import { useState } from 'react';
import ComingSoonModal from '../../components/coming-soon';
import { discord } from '../../lib/links';

const links = [
  {
    name: 'Pup Drops',
    link: 'https://neftyblocks.com/c/cryptopuppie',
    title: 'Pup Drops'
  },
  {
    name: 'Marketplace',
    link: 'https://wax.atomichub.io/market?collection_name=cryptopuppie&order=desc&schema_name=pupskincards&sort=price&symbol=WAX',
    title: 'Marketplace'
  },

  {
    name: 'Pup Community',
    link: discord,
    title: 'Pup Community'
  },
  {
    name: 'Leaderboards',
    link: '',
    title: 'Coming Soon'
  },
  {
    name: 'Pupgrades',
    link: '',
    title: 'Coming Soon'
  },
  {
    name: 'Pupswap',
    link: '',
    title: 'Coming Soon'
  }
];

const PupLinks = () => {
  const [open, setOpen] = useState(false);

  const openComingSoonModal = () => setOpen(true);
  const closeComingSoonModal = () => setOpen(false);

  return (
    <div className="bg-pastel-blue">
      <ComingSoonModal open={open} closeModal={closeComingSoonModal} />

      <div className="py-32 w-5/6 2xl:w-4/5 3xl:w-2/3 mx-auto text-center">
        <div className="inline-flex flex-col items-center justify-center">
          <h2 className="font-alt font-bold text-4xl tracking-wide text-white uppercase">
            Pup Links
          </h2>
          <div className="mt-0.5 py-0.5 rounded-full bg-white w-3/5"></div>
        </div>

        <p className="lg:text-lg mt-8 text-white">
          Where do you want to <strong>start your adventure?</strong>
        </p>

        <div className="mt-12 w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {links.map((i, index) => (
            <>
              {i.link == '' ? (
                <button
                  onClick={openComingSoonModal}
                  key={index}
                  title={i.title}
                  className="font-alt py-3 px-6 rounded-xl bg-white text-pastel-blue text-2xl lg:text-3xl flex items-center justify-center"
                >
                  {i.name}
                </button>
              ) : (
                <a
                  key={index}
                  href={i.link}
                  title={i.title}
                  target="_blank"
                  rel="noreferrer"
                  className="font-alt py-3 px-6 rounded-xl bg-white text-pastel-blue text-2xl lg:text-3xl flex items-center justify-center"
                >
                  {i.name}
                </a>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PupLinks;
