import useGetLeaderboard from '../../hooks/useGetLeaderboard';
import { pupPerks } from '../profile/view-perks/perks';

const LeaderboardContainer = () => {
  const leaderboard = useGetLeaderboard();

  const getColor = (rank: string) => {
    return pupPerks.filter((p) => p.rank == rank)[0].class;
  };

  return (
    <div className="w-5/6 mx-auto">
      {leaderboard ? (
        <div className="grid grid-cols-3 gap-12">
          {Object.entries(leaderboard)
            .reverse()
            .map(([key, value], index) => (
              <div key={index} className="border border-gray-100 rounded-xl p-8 shadow-xl">
                <h3
                  className={`text-center tracking-wider font-black text-2xl uppercase ${
                    getColor(key).color
                  }`}
                >
                  {key}
                </h3>

                <hr className="my-3" />

                <ul className="">
                  {value.map((i, ix) => (
                    <li key={ix} className="py-2 flex items-center justify-between">
                      <div className="inline-flex items-center">
                        <span className="mr-2 font-medium text-gray-500">
                          {ix + 1}
                          {')'}
                        </span>
                        <span className="font-medium text-gray-800">{i.wallet}</span>
                      </div>

                      <span className="font-bold tracking-wide">
                        {i.dps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LeaderboardContainer;
