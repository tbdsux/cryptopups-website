import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { useGetTableRows } from '@cryptopuppie/useeoschain';

interface RewardConfigProps {
  setid: number;
  assets: string[];
}

interface UserRewardConfigProps {
  user: string;
  setids: number[];
}

const useGetAssetRewardsConfig = (setid?: number) => {
  const { data } = useGetTableRows<RewardConfigProps>(
    setid
      ? {
          code: 'wocgalleryrw',
          table: 'claimedasset',
          scope: 'wocgalleryrw',
          lower_bound: setid.toString(),
          upper_bound: setid.toString(),
          limit: 1
        }
      : undefined
  );

  return data?.rows[0];
};

const useGetUserRewardsConfig = () => {
  const { user } = useWaxUser();

  const { data } = useGetTableRows<UserRewardConfigProps>(
    user
      ? {
          code: 'wocgalleryrw',
          table: 'claimeduser',
          scope: 'wocgalleryrw',
          lower_bound: user.wallet,
          upper_bound: user.wallet,
          limit: 1
        }
      : undefined
  );

  return data?.rows[0];
};

export { useGetAssetRewardsConfig, useGetUserRewardsConfig };
