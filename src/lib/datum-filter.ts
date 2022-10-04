import { IAsset } from '@cryptopuppie/useatomicassets';

type FilteredDatum = {
  [x: string]: {
    data: IAsset;
    count: number;
  };
};

const datumFilter = (data: IAsset[]) => {
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
