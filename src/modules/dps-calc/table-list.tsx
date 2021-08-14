import Container from '../../components/container';
import { isEven } from '../../utils/isEven';
import { capitalizeFirstLetter } from '../../utils/upfirst';
import pupcards from '../gallery/pupcards.json';
import pupitems from '../gallery/pupitems.json';
import pupskins from '../gallery/pupskins.json';

const LIST = [
  {
    name: 'Puppy Cards',
    list: pupcards
  },
  {
    name: 'Pup Skins',
    list: pupskins
  },
  {
    name: 'Pup Items',
    list: pupitems
  }
];

const DPSListTable = () => {
  return (
    <Container className="w-5/6 sm:w-4/5 py-12">
      <h4 className="text-3xl text-center leading-snug mb-8 font-black tracking-wide">
        DPS Cards & Items Basis
      </h4>

      <div className="w-11/12 sm:w-5/6 mx-auto">
        {LIST.map((x, index) => (
          <div key={index} className="mb-8">
            <h5>{x.name}</h5>
            <table className="w-full text-center rounded-lg table-fixed">
              <thead className="bg-warmGray-800 text-white">
                <th className="w-1/5 py-2 border border-warmGray-500">Rarity</th>
                <th className="w-3/5 py-2 border border-warmGray-500">Name</th>
                <th className="w-1/5 py-2 border border-warmGray-500">DPS</th>
              </thead>

              <tbody className="">
                {x.list.map((i, idx) => (
                  <tr key={idx} className={isEven(idx) ? 'bg-warmGray-100' : ''}>
                    <td className="border p-1 text-sm truncate">
                      {capitalizeFirstLetter(i.rarity)}
                    </td>
                    <td className="border p-1 truncate">{i.name}</td>
                    <td className="border p-1">{i.DPS}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DPSListTable;
