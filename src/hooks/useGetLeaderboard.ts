import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { LeaderboardResponseProps } from '../types/leaderboard';

const useGetLeaderboard = () => {
  const { data } = useSWR<LeaderboardResponseProps>(
    'https://cordy-api.deta.dev/leaderboard',
    fetcher
  );

  return data?.data;
};

export default useGetLeaderboard;
