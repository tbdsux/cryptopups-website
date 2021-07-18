import CustomPageHeader from "../../components/custom-page-header";
import CustomLayout from "../../layout/custom";

const DPSCalculatorPage = () => {
  return (
    <CustomLayout title="DPS Calculator">
      <CustomPageHeader
        title="DPS Calculator"
        description="Calculate your DPS from the pups that you have..."
      >
        <div className="text-center mt-8">
          <button className="bg-warmGray-600 hover:bg-warmGray-700 text-white tracking-wide py-2 px-8 rounded-full text-sm">
            Authenticate Account
          </button>
        </div>
      </CustomPageHeader>

      <div></div>
    </CustomLayout>
  );
};

export default DPSCalculatorPage;
