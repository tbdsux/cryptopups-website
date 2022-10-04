import { GetServerSideProps } from 'next';
import DPSCalculatorPage from '../modules/dps-calc';
import { PUPITEMS_API, PUPPYCARDS_API, PUPSKINS_API } from '../modules/dps-calc/apilinks';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { waxid } = query;

  if (waxid) {
    const wallet = Array.isArray(waxid) ? waxid.join() : waxid;

    const pupskins = await (await fetch(PUPSKINS_API.replace('{{owner}}', wallet))).json();
    const pupcards = await (await fetch(PUPPYCARDS_API.replace('{{owner}}', wallet))).json();
    const pupitems = await (await fetch(PUPITEMS_API.replace('{{owner}}', wallet))).json();

    return {
      props: {
        wallet,
        data: {
          pupskins: pupskins.data,
          pupcards: pupcards.data,
          pupitems: pupitems.data
        }
      }
    };
  }

  return {
    props: {}
  };
};

export default DPSCalculatorPage;
