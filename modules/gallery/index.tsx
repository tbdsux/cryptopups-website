import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import PageLayout from '../../layouts/page-layout';
import GalleryContainer from './gallery-container';

const GalleryPage = () => {
  return (
    <PageLayout
      title="Pup Gallery!"
      description="View our collections, assets, and works of art ;)"
    >
      {/* start seo */}
      <NextSeo title="Gallery" description="View our pup collections, cards, skins, and items" />
      {/* end seo */}

      <Container className="w-11/12 xs:w-4/5 sm:w-2/3 md:w-11/12 mx-auto">
        <GalleryContainer />
      </Container>
    </PageLayout>
  );
};

export default GalleryPage;
