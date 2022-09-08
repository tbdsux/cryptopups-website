import Link from 'next/link';

const links = [
  {
    name: 'Pup Drops',
    link: '/',
    title: 'Coming Soon'
  },
  {
    name: 'Pupgrades',
    link: '/',
    title: 'Coming Soon'
  },
  {
    name: 'Pup Community',
    link: '/',
    title: 'Coming Soon'
  },
  {
    name: 'Leaderboards',
    link: '/',
    title: 'Coming Soon'
  },
  {
    name: 'Marketplace',
    link: '/',
    title: 'Coming Soon'
  },
  {
    name: 'Pupswap',
    link: '/',
    title: 'Coming Soon'
  }
];

const PupLinks = () => {
  return (
    <div className="bg-pastel-blue">
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
            <Link key={index} href={i.link}>
              <a
                title={i.title}
                className="font-alt py-3 px-6 rounded-xl bg-white text-pastel-blue text-3xl"
              >
                {i.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PupLinks;
