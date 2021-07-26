import { NextSeo } from 'next-seo';
import DefaultLayout from '../../layouts/default';

const GalleryPage = () => {
  return (
    <DefaultLayout>
      {/* start seo */}
      <NextSeo title="Gallery" description="View our pup collections, cards, skins, and items" />
      {/* end seo */}

      <div>START OF GALLERY PAGE</div>
    </DefaultLayout>
  );
};

export default GalleryPage;
