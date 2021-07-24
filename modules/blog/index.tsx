import { NextSeo } from 'next-seo';
import PageHeader from '../../components/page-header';
import DefaultLayout from '../../layout/default';

const BlogPage = () => {
  return (
    <DefaultLayout>
      {/* start seo */}
      <NextSeo title="Blog" description="Read our articles and blogs" />
      {/* end seo */}

      <PageHeader
        title="Pup Blogs!"
        description="Read our articles and blogs about our activities, events and stuff"
      />

      <div>START OF BLOG PAGE</div>
    </DefaultLayout>
  );
};

export default BlogPage;
