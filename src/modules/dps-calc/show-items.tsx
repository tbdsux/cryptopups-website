import { Datum, DPSComponentProps } from './apitypes';

type FilteredDatum = {
  [x: string]: {
    data: Datum;
    count: number;
  };
};

const datumFilter = (data: Datum[]) => {
  var x: FilteredDatum = {};

  data.forEach((i) => {
    x[i.name] = {
      data: i,
      count: (x[i.name] ? x[i.name].count : 0) + 1
    };
  });

  return x;
};

const ShowItems = ({ owner, data }: DPSComponentProps) => {
  return (
    <ul className="h-112 overflow-auto border p-2 rounded-lg">
      {Object.entries(datumFilter(data)).map(([, { data: d, count }], index) =>
        d.owner === owner ? (
          <li key={index} className="flex items-center justify-between border-b p-2">
            <p>
              {d.data.name.trim()}{' '}
              {count > 1 && (
                <span title={`${count} Items`} className="underline text-gray-700 text-sm">
                  ({count})
                </span>
              )}
            </p>
            <strong className="text-gray-800">{Number(d.data.DPS) * Number(count)}</strong>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default ShowItems;
