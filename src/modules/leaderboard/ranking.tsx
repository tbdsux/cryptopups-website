import Image from 'next/image';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { DPSProps } from '../../types/dps';
import { APIResponseProps } from '../../types/responses';
import { isEven } from '../../utils/isEven';

const API_URL = 'https://cordy-api.deta.dev/leaderboard';

const LeaderboardRanking = () => {
  const { data, error } = useSWR<APIResponseProps<DPSProps[]>, APIResponseProps<null>>(
    API_URL,
    fetcher
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) return <div>Loading...</div>;

  return (
    <div className="h-screen overflow-auto">
      <table className="w-full text-center rounded-lg table-fixed">
        <thead className="bg-warmGray-800 text-white">
          <th className="w-1/12 py-2 border border-warmGray-500">Rank</th>
          <th className="w-3/5 py-2 border border-warmGray-500">User</th>
          <th className="w-1/5 py-2 border border-warmGray-500">Total DPS</th>
        </thead>

        <tbody className="">
          {data.data?.map((i, index) => (
            <tr key={index} className={isEven(index) ? 'bg-warmGray-100' : ''}>
              <td className="border p-2 text-sm truncate">{index + 1}</td>
              <td className="border p-2 truncate flex items-center justify-center">
                {i.user.avatar && i.user.avatar.startsWith('https://') && (
                  <Image
                    src={i.user.avatar}
                    height="40"
                    width="40"
                    alt={i.user.tag}
                    className="rounded-full"
                  />
                )}
                <span className="ml-3 font-medium">{i.user.tag}</span>
              </td>
              <td className="border p-2">
                {i.dps.pupcards + i.dps.pupitems.real + i.dps.pupskins}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardRanking;
