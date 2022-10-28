import { NextSeo } from 'next-seo';
import PageLayout from '../../layouts/page-layout';
import LeaderboardContainer from './container';

const LeaderboardPage = () => {
  return (
    <PageLayout
      title="Leaderboard"
      description="View DPS leaderboard with the top pup collectors in the community"
    >
      {/* start seo */}
      <NextSeo
        title="Leaderboard"
        description="View DPS leaderboard with the top pup collectors in the community"
      />
      {/* end seo */}

      <LeaderboardContainer />
    </PageLayout>
  );
};

export default LeaderboardPage;
