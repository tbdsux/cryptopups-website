import { IAsset } from '@cryptopuppie/useatomicassets';
import { dpsCalculator, dpsItemsCalculator } from './calculator';

type DPS_CalculateProps = {
  owner: string;
  data: {
    pupskins: IAsset[];
    puppycards: IAsset[];
    pupitems: IAsset[];
  };
};

const DPS_Calculate = ({ owner, data }: DPS_CalculateProps) => {
  const skinsDPs = dpsCalculator(data.pupskins);
  const cardsDps = dpsCalculator(data.puppycards);
  const rawItemsDps = dpsCalculator(data.pupitems);
  const realItemsDps = dpsItemsCalculator(data.pupskins, data.pupitems, owner);

  return (
    <div>
      <h3 className="text-2xl">
        <strong className="text-neutral-700 mr-4 text-4xl underline font-black tracking-wider">
          {(skinsDPs + cardsDps + realItemsDps).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </strong>
        TOTAL DPS
      </h3>

      <ul className="flex items-center justify-between flex-wrap mt-4">
        <li className="tracking-wide">
          <strong className="text-lg tracking-wide font-black text-neutral-700">
            {cardsDps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </strong>
          <span className=" ml-2">Cards DPS</span>
        </li>

        <li className="tracking-wide">
          <strong className="text-lg tracking-wide font-black text-neutral-700">
            {skinsDPs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </strong>
          <span className=" ml-2">Skins DPS</span>
        </li>

        <li className="tracking-wide">
          <strong className="text-lg tracking-wide font-black text-neutral-700">
            {rawItemsDps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </strong>
          <span className=" ml-2">Items DPS (Raw)</span>
        </li>

        <li className="tracking-wide">
          <strong className="text-lg tracking-wide font-black text-neutral-700">
            {realItemsDps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </strong>
          <span className=" ml-2">Items DPS (Real)</span>
        </li>
      </ul>
    </div>
  );
};

export default DPS_Calculate;
