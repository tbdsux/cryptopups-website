import { NextSeo } from 'next-seo';
import PageLayout from '../../layouts/page-layout';

const BlogPage = () => {
  return (
    <PageLayout
      title="Pup Blogs!"
      description="Read our articles and blogs about our activities, events and stuff"
    >
      {/* start seo */}
      <NextSeo title="Blog" description="Read our articles and blogs" />
      {/* end seo */}

      <div>START OF BLOG PAGE</div>
    </PageLayout>
  );
};

export default BlogPage;
