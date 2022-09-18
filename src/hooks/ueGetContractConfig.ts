import { useGetTableRows } from '@cryptopuppie/useeoschain';

interface ContractConfigProps {
  setcounter: number;
  blacklisted_wallets: string[];
}

const useGetContractConfig = () => {
  const { data } = useGetTableRows<ContractConfigProps>({
    code: 'wocgalleryrw',
    table: 'config',
    scope: 'wocgalleryrw',
    limit: 1
  });

  return data?.rows[0];
};

export default useGetContractConfig;
