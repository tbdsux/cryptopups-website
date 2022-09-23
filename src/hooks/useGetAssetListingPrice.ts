import { useAtomicGetter } from '@cryptopuppie/useatomicassets';

// basis:
//  https://wax.api.atomicassets.io/atomicmarket/v2/sales?state=1&template_id={template_id}&order=asc&sort=price&limit=1&symbol=WAX

interface GetAssetListingPriceProps extends Record<string, any> {
  price: {
    token_contract: string;
    token_symbol: string;
    token_precision: number;
    median: any;
    amount: string;
  };
  listing_price: string;
  listing_symbol: string;
}

const useGetAssetListingPrice = (template?: string | number) => {
  const { data } = useAtomicGetter<GetAssetListingPriceProps[]>(
    template
      ? {
          uri: `/atomicmarket/v2/sales?state=1&template_id=${template}&order=asc&sort=price&limit=1&symbol=WAX`
        }
      : undefined
  );

  if (!data) return null;

  return data[0];
};

export default useGetAssetListingPrice;
