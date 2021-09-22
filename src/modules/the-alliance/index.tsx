import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import CustomPageHeader from '../../components/custom-page-header';
import CustomLayout from '../../layouts/custom';
import { Alliance } from './alliance';
import TheAllianceSection from './section';

const TheAlliancePage = () => {
  return (
    <CustomLayout>
      {/* start seo */}
      <NextSeo title="The Alliance" description="Follow and support our fellow NFT Artists" />
      {/* end seo */}

      <CustomPageHeader
        title="The Alliance"
        description="Follow and support our fellow NFT Artists"
      >
        <div></div>
      </CustomPageHeader>

      <Container className="w-5/6 2xl:w-4/5 3xl:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-12 mt-8 mb-24">
        {Alliance.map((d, index) => (
          <TheAllianceSection key={index} data={d} />
        ))}
      </Container>
    </CustomLayout>
  );
};

export default TheAlliancePage;
