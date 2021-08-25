import { Datum } from '../modules/dps-calc/apitypes';

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

export type { FilteredDatum };
export { datumFilter };
