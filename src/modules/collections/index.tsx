import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import CustomPageHeader from '../../components/custom-page-header';
import { useHasMounted } from '../../hooks/useHasMounted';
import CustomLayout from '../../layouts/custom';
import MyCollectionsAuthenticate from './authenticate';
import ShowCollections from './show-collections';
import MyCollectionsUser from './user';

const MyCollectionsPage = () => {
  const { isLoggedIn } = useWaxUser();
  const mounted = useHasMounted();

  return (
    <CustomLayout>
      {/* start seo */}
      <NextSeo
        title="My Collections"
        description="View your collections that you have bought from us"
      />
      {/* end seo */}

      <CustomPageHeader
        title="My Collections"
        description="View your collections that you have bought from us"
      >
        <div>
          <MyCollectionsAuthenticate />
        </div>
      </CustomPageHeader>

      {isLoggedIn && mounted && (
        <Container className="w-11/12 pb-8">
          <MyCollectionsUser />

          <hr className="my-6" />

          <ShowCollections />
        </Container>
      )}
    </CustomLayout>
  );
};

export default MyCollectionsPage;
