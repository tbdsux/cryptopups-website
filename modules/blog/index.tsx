import { NextSeo } from "next-seo";
import DefaultLayout from "../../layout/default";

const BlogPage = () => {
  return (
    <DefaultLayout>
      {/* start seo */}
      <NextSeo title="Blog" description="Read our articles and blogs" />
      {/* end seo */}

      <div>START OF BLOG PAGE</div>
    </DefaultLayout>
  );
};

export default BlogPage;
