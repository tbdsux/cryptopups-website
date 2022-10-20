import { useGetTableRows } from '@cryptopuppie/useeoschain';

interface WhitelistConfigProps {
  wallets: string[];
}

const useGetWhitelists = () => {
  const { data } = useGetTableRows<WhitelistConfigProps>({
    code: 'wocgalleryrw',
    table: 'whiteconfig',
    scope: 'wocgalleryrw',
    limit: 1
  });

  return data?.rows[0].wallets ?? [];
};

export default useGetWhitelists;
