import { NextSeo } from "next-seo";
import CustomPageHeader from "../../components/custom-page-header";
import useAuth from "../../hooks/useAuth";
import CustomLayout from "../../layout/custom";
import MyCollectionsAuthenticate from "./authenticate";
import MyCollectionsUser from "./user";

const MyCollectionsPage = () => {
  const { session } = useAuth();

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

      {session && (
        <div className="pb-8">
          <MyCollectionsUser />
        </div>
      )}
    </CustomLayout>
  );
};

export default MyCollectionsPage;
