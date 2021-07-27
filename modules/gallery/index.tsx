import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import PageLayout from '../../layouts/page-layout';

const GalleryPage = () => {
  return (
    <PageLayout
      title="Pup Gallery!"
      description="View our collections, assets, and works of art ;)"
    >
      {/* start seo */}
      <NextSeo title="Gallery" description="View our pup collections, cards, skins, and items" />
      {/* end seo */}

      <Container className="w-5/6 mx-auto">Start of the Pups Gallery</Container>
    </PageLayout>
  );
};

export default GalleryPage;
