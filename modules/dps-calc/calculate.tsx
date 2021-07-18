import { Datum, DPSComponentProps } from "./apitypes";

const dpsCalculator = ({ data, owner }: DPSComponentProps) => {
  var dps = 0;

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    if (element.owner === owner) {
      dps += Number(element.data.DPS);
    }
  }

  return dps;
};

const dpsItemsCalculator = (basis: Datum[], data: Datum[], owner: string) => {
  var dps = 0;

  console.log(data[0]);

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    const exists = basis.filter((d) => {
      return (
        d.data.name === element.data["Item Owner"] && owner === element.owner
      );
    })[0];
    if (exists) {
      dps += Number(element.data.DPS);
    }
  }

  return dps;
};

type DPS_CalculateProps = {
  owner: string;
  data: {
    pupskins: Datum[];
    puppycards: Datum[];
    pupitems: Datum[];
  };
};

const DPS_Calculate = ({ owner, data }: DPS_CalculateProps) => {
  const skinsDPs = dpsCalculator({ owner, data: data.pupskins });
  const cardsDps = dpsCalculator({ owner, data: data.puppycards });
  const itemsDps = dpsItemsCalculator(data.pupskins, data.pupitems, owner);

  return (
    <div>
      <h3 className="text-2xl">
        <strong className="text-gray-700 mr-4 text-4xl underline font-black tracking-wider">
          {skinsDPs + cardsDps + itemsDps}
        </strong>
        TOTAL DPS
      </h3>
    </div>
  );
};

export default DPS_Calculate;
