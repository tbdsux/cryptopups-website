import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import PageLayout from '../../layouts/page-layout';
import LeaderboardRanking from './ranking';

const LeaderboardPage = () => {
  return (
    <PageLayout
      title="Pup DPS Leaderboards"
      description="View the top members of World of Cryptopups with highest DPS stats"
    >
      {/* start seo */}
      <NextSeo
        title="Pup DPS Leaderboards"
        description="View the top members of World of Cryptopups with highest DPS stats"
      />
      {/* end seo */}

      <Container className="w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto">
        <LeaderboardRanking />
      </Container>
    </PageLayout>
  );
};

export default LeaderboardPage;
