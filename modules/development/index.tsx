import { NextSeo } from "next-seo";
import DefaultLayout from "../../layout/default";

const DevelPage = () => {
  return (
    <DefaultLayout>
      {/* start seo */}
      <NextSeo
        title="Development"
        description="The development status of all CryptoPups projects on the dev side"
      />
      {/* end seo */}

      <div>START OF Development PAGE</div>
    </DefaultLayout>
  );
};

export default DevelPage;
