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
    link: '#puplinks',
    title: 'Coming Soon'
  },
  {
    name: 'Pupgrades',
    link: '#puplinks',
    title: 'Coming Soon'
  },
  {
    name: 'Pupswap',
    link: '#puplinks',
    title: 'Coming Soon'
  }
];

const PupLinks = () => {
  return (
    <div id="puplinks" className="bg-pastel-blue">
      <div className="py-32 w-5/6 2xl:w-4/5 3xl:w-2/3 mx-auto text-center">
        <div className="inline-flex flex-col items-center justify-center">
          <h2 className="font-alt font-bold text-4xl tracking-wide text-white uppercase">
            Pup Links
          </h2>
          <div className="mt-0.5 py-0.5 rounded-full bg-white w-3/5"></div>
        </div>

        <p className="text-lg mt-8 text-white">
          Where do you want to <strong>start your adventure?</strong>
        </p>

        <div className="mt-12 w-4/5 mx-auto grid grid-cols-3 gap-12">
          {links.map((i, index) => (
            <a
              key={index}
              href={i.link}
              title={i.title}
              target={i.link.startsWith('#') ? '_self' : '_blank'}
              rel="noreferrer"
              className="font-alt py-3 px-6 rounded-xl bg-white text-pastel-blue text-3xl"
            >
              {i.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PupLinks;
