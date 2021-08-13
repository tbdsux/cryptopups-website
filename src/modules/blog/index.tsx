import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import PageLayout from '../../layouts/page-layout';
import ListBlogs from './list-blogs';

const BlogPage = () => {
  return (
    <PageLayout
      title="Pup Blogs!"
      description="Read our articles and blogs about our activities, events and stuff"
    >
      {/* start seo */}
      <NextSeo title="Blog" description="Read our articles and blogs" />
      {/* end seo */}

      <Container className="w-5/6 mx-auto">
        <ListBlogs />
      </Container>
    </PageLayout>
  );
};

export default BlogPage;
