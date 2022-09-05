import Link from 'next/link';

const links = [
  {
    name: 'Gallery',
    link: '/gallery'
  },
  {
    name: 'Pupgrades',
    link: '/'
  },
  {
    name: 'My Collection',
    link: '/my-collection'
  },
  {
    name: 'Leaderboards',
    link: '/leaderboards'
  },
  {
    name: 'Marketplace',
    link: '/'
  },
  {
    name: 'Pupswap',
    link: '/'
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
          <div className="py-0.5 rounded-full bg-white w-3/5"></div>
        </div>

        <p className="text-xl mt-8 text-white">
          Where do you want to <strong>start your adventure?</strong>
        </p>

        <div className="mt-12 w-4/5 mx-auto grid grid-cols-3 gap-12">
          {links.map((i, index) => (
            <Link key={index} href={i.link}>
              <a className="font-alt py-3 px-6 rounded-xl bg-white text-pastel-blue text-3xl">
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
