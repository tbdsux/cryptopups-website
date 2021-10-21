import Image from 'next/image';
import Link from 'next/link';
import featuredPup from '../../../public/featured.png';
import Container from '../../components/container';

const DiscoverItems = [
  {
    title: 'Gallery',
    link: {
      url: '/gallery',
      text: 'View Pup Collections'
    },
    style: 'bg-spec-red'
  },
  {
    title: 'Roadmap',
    link: {
      url: 'https://roadmap.worldofcryptopups.cf/',
      text: 'Visit Roadmap'
    },
    style: 'bg-spec-orange'
  },
  {
    title: 'Whitepaper',
    link: {
      url: '/whitepaper.pdf',
      text: 'Download Whitepaper'
    },
    style: 'bg-spec-yellow'
  },
  {
    title: 'The Alliance',
    link: {
      url: '/the-alliance',
      text: 'View Alliance Party'
    },
    style: 'bg-spec-green'
  },
  {
    title: 'DPS Calculator',
    link: {
      url: '/dps-calculator',
      text: 'View Page'
    },
    style: 'bg-spec-blue'
  },
  {
    title: 'My Collections',
    link: {
      url: '/my-collections',
      text: 'Visit Page'
    },
    style: 'bg-spec-purple'
  }
];

const AboutProject = () => {
  return (
    <div className="py-32">
      <Container className="w-5/6 2xl:w-4/5 3xl:w-2/3 flex flex-col lg:flex-row items-center">
        <div className="lg:mr-16">
          <h4 className="text-4xl md:text-5xl leading-relaxed font-black tracking-wide mb-12 text-gray-900">
            About the Project
          </h4>
          <p className="text-lg lg:text-xl tracking-wide text-gray-800">
            <strong className="font-black">The World of Cryptopups</strong> is a collectible
            Non-Fungible-Tokens (NFTs) of unique pups that can suit everyone.
            <br className="mb-2" />
            We are a fast-growing community and with various levels, rewards, and quests to explore,
            the adventure doesn&apos;t stop. Collect, Trade, and Level Up one pup at a time! <br />
            <br />
            Where do you want to start your adventure?
          </p>

          <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-4">
            {DiscoverItems.map((d, index) =>
              d.link.url.startsWith('https') ? (
                <a
                  href={d.link.url}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  title={d.link.text}
                  className={`p-3 sm:p-4 xl:p-5 rounded-xl opacity-80 hover:opacity-100 ${d.style}`}
                >
                  <span className="text-base md:text-lg xl:text-xl font-bold text-white">
                    {d.title}
                  </span>
                </a>
              ) : (
                <Link key={index} href={d.link.url}>
                  <a
                    title={d.link.text}
                    className={`p-3 sm:p-4 xl:p-5 rounded-xl opacity-80 hover:opacity-100 ${d.style}`}
                  >
                    <span className="text-base md:text-lg xl:text-xl font-bold text-white">
                      {d.title}
                    </span>
                  </a>
                </Link>
              )
            )}
          </div>
        </div>

        <div className="w-5/6 mx-auto sm:w-3/4 md:w-1/2 lg:w-full">
          <Image height="1100" width="1100" src={featuredPup} alt="World of Cryptopups" />
        </div>
      </Container>
    </div>
  );
};

export default AboutProject;
