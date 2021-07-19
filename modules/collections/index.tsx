import { NextSeo } from "next-seo";
import DefaultLayout from "../../layout/default";

const MyCollectionsPage = () => {
  return (
    <DefaultLayout>
      {/* start seo */}
      <NextSeo
        title="My Collections"
        description="View your collections that you have bought from us"
      />
      {/* end seo */}

      <div>START OF My Collections PAGE</div>
    </DefaultLayout>
  );
};

export default MyCollectionsPage;
