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
      />

      <Container className="w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/3">
        <BlogsContainer />
      </Container>
    </PageLayout>
  );
};

export default BlogsPage;
