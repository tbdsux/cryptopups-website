import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import PageLayout from '../../layouts/page-layout';
import BlogsContainer from './container';

const BlogsPage = () => {
  return (
    <PageLayout
      title="Blogs"
      description="Read updates, blogs and news of the latest changes to our project"
    >
      <NextSeo
        title="Blogs"
        description="Read updates, blogs and news of the latest changes to our project"
        openGraph={{
          images: [
            {
              url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=Blogs`,
              height: 600,
              width: 1200,
              alt: 'Blogs Page'
            },
            {
              url: 'https://www.worldofcryptopups.com/background.png',
              height: 720,
              width: 1280,
              alt: 'The World of CryptoPups'
            }
          ]
        }}
      />

      <Container className="w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/3 3xl:w-3/5">
        <BlogsContainer />
      </Container>
    </PageLayout>
  );
};

export default BlogsPage;
