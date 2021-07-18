import { DPSComponentProps } from "./apitypes";

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

type DPS_CalculateProps = {};

const DPS_Calculate = ({ owner, data }: DPSComponentProps) => {
  const dps = dpsCalculator({ owner, data });

  return (
    <div>
      <h3 className="text-2xl">
        <strong className="text-gray-700 mr-4 text-4xl underline font-black tracking-wider">
          {dps}
        </strong>
        TOTAL DPS
      </h3>
    </div>
  );
};

export default DPS_Calculate;
