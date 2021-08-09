import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/container';
import featuredPup from '../../public/featured-white.png';

const DiscoverItems = [
  {
    title: 'Gallery',
    link: {
      url: '/gallery',
      text: 'View Pup Collections'
    }
  },
  {
    title: 'Roadmap',
    link: {
      url: '/roadmap',
      text: 'Visit Roadmap'
    }
  },
  {
    title: 'Whitepaper',
    link: {
      url: '/whitepaper.pdf',
      text: 'Download Whitepaper'
    }
  },
  {
    title: 'The Alliance',
    link: {
      url: '/the-alliance',
      text: 'View Alliance Party'
    }
  },
  {
    title: 'DPS Calculator',
    link: {
      url: '/dps-calculator',
      text: 'View Page'
    }
  },
  {
    title: 'My Collections',
    link: {
      url: '/my-collections',
      text: 'Visit Page'
    }
  }
];

const DiscoverContainer = () => {
  return (
    <div className="py-24">
      <Container className="w-5/6 flex flex-col lg:flex-row items-center">
        <div>
          <h4 className="text-4xl md:text-5xl leading-relaxed font-black tracking-wide mb-2">
            About the Project
          </h4>
          <p className="text-lg lg:text-xl tracking-wide">
            <strong className="font-black">The World of Cryptopups</strong> is a collectible
            Non-Fungible-Tokens (NFTs) of unique pups that can suit everyone.
            <br className="mb-2" />
            We are a fast-growing community and with various levels, rewards, and quests to explore,
            the adventure doesn&apos;t stop. Collect, Trade, and Level Up one pup at a time! <br />
            <br />
            Where do you want to start your adventure?
          </p>

          <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
            {DiscoverItems.map((d, index) => (
              <Link key={index} href={d.link.url}>
                <a
                  title={d.link.text}
                  className="p-3 sm:p-4 lg:p-6 rounded-xl bg-warmGray-800 opacity-90 hover:opacity-100"
                >
                  <span className="text-base md:text-lg lg:text-xl font-bold tracking-wide text-white">
                    {d.title}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-3/4 sm:w-3/5 lg:w-full">
          <Image src={featuredPup} alt="World of Cryptopups" />
        </div>
      </Container>
    </div>
  );
};

export default DiscoverContainer;
