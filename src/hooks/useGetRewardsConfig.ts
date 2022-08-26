import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { useGetTableRows } from '@cryptopuppie/useeoschain';

interface RewardConfigProps {
  setcounter: number;
  used_assets: string[];
}

interface UserRewardConfigProps {
  user: string;
  setids: number[];
}

const useGetRewardsConfig = () => {
  const { data } = useGetTableRows<RewardConfigProps>({
    code: 'wocgalleryrw',
    table: 'config',
    scope: 'wocgalleryrw'
  });

  return data?.rows[0];
};

const useGetUserRewardsConfig = () => {
  const { user } = useWaxUser();

  const { data } = useGetTableRows<UserRewardConfigProps>(
    user
      ? {
          code: 'wocgalleryrw',
          table: 'claimed',
          scope: 'wocgalleryrw',
          lower_bound: user.wallet,
          limit: 1
        }
      : undefined
  );

  return data?.rows[0];
};

export { useGetRewardsConfig, useGetUserRewardsConfig };
