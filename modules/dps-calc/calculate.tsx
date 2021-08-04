import { Datum, DPSComponentProps } from './apitypes';

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

// fix: item owners could be different?
const demon = ['Demon Queen', 'Demon Ace', 'Demon King'];
const mecha = ['Mecha Glitter', 'Mecha Apollo', 'Mecha Draco'];

const dpsItemsCalculator = (basis: Datum[], data: Datum[], owner: string) => {
  var dps = 0;

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    const exists = basis.filter((d) => {
      var _name = d.data.name.trim();

      // patch fixes for demon and mecha items
      if (demon.includes(_name)) {
        _name = 'Demon';
      } else if (mecha.includes(_name)) {
        _name = 'Mecha';
      }

      return _name === element.data['Item Owner']?.trim() && owner === element.owner;
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
  const rawItemsDps = dpsCalculator({ owner, data: data.pupitems });
  const realItemsDps = dpsItemsCalculator(data.pupskins, data.pupitems, owner);

  return (
    <div>
      <h3 className="text-2xl">
        <strong className="text-gray-700 mr-4 text-4xl underline font-black tracking-wider">
          {(skinsDPs + cardsDps + realItemsDps).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </strong>
        TOTAL DPS
      </h3>

      <ul className="flex items-center justify-between flex-wrap mt-4">
        <li className="tracking-wide">
          <strong className="text-lg tracking-wide font-black text-gray-700">
            {cardsDps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </strong>
          <span className=" ml-2">Cards DPS</span>
        </li>

        <li className="tracking-wide">
          <strong className="text-lg tracking-wide font-black text-gray-700">
            {skinsDPs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </strong>
          <span className=" ml-2">Skins DPS</span>
        </li>

        <li className="tracking-wide">
          <strong className="text-lg tracking-wide font-black text-gray-700">
            {rawItemsDps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </strong>
          <span className=" ml-2">Items DPS (Raw)</span>
        </li>

        <li className="tracking-wide">
          <strong className="text-lg tracking-wide font-black text-gray-700">
            {realItemsDps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </strong>
          <span className=" ml-2">Items DPS (Real)</span>
        </li>
      </ul>
    </div>
  );
};

export default DPS_Calculate;
