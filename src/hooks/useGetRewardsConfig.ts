import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { useGetTableRows } from '@cryptopuppie/useeoschain';

interface UserRewardConfigProps {
  user: string;
  setids: number[];
}

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

export { useGetUserRewardsConfig };
