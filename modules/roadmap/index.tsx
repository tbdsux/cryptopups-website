import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Container from '../../components/container';
import CustomPageHeader from '../../components/custom-page-header';
import CustomLayout from '../../layouts/custom';
import imgRoadmap from '../../public/roadmap.png';

const RoadMap = () => {
  return (
    <CustomLayout>
      {/* start seo */}
      <NextSeo
        title="Roadmap"
        description="The Roadmap status of the World of CryptoPups project"
        openGraph={{
          images: [
            {
              url: 'https://www.cryptopups.cf/roadmap.png',
              alt: 'Roadmap of World of Cryptopups'
            }
          ]
        }}
      />
      {/* end seo */}

      <CustomPageHeader
        title="ROAD MAP"
        description="The Roadmap status of the World of CryptoPups project"
      />

      <Container className="w-5/6 mt-4 mb-20">
        <Image src={imgRoadmap} alt="World of Cryptopups RoadMap" placeholder="blur" />
      </Container>
    </CustomLayout>
  );
};

export default RoadMap;
