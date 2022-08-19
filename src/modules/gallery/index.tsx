import { GetTableRowsResult } from '@cryptopuppie/useeoschain';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import PageLayout from '../../layouts/page-layout';
import { SetProps } from '../../types/sets';
import GalleryContainer from './gallery-container';
import SetsProvider from './sets-provider';

interface GalleryPageProps {
  data: GetTableRowsResult<SetProps>;
}

const GalleryPage: NextPage<GalleryPageProps> = ({ data }) => {
  return (
    <PageLayout
      title="Pup Gallery!"
      description="View our collections, assets, and works of art ;)"
    >
      {/* start seo */}
      <NextSeo
        title="Gallery"
        description="View our pup collections, cards, skins, and items"
        noindex
      />
      {/* end seo */}

      <SetsProvider sets={data}>
        <Container className="w-11/12 xs:w-4/5 md:w-11/12 mx-auto">
          <GalleryContainer />
        </Container>
      </SetsProvider>
    </PageLayout>
  );
};

export default GalleryPage;
