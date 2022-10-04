import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { useEffect, useState } from 'react';
import useGetSchemaAssets from '../../hooks/useGetSchemaAssets';
import { dpsCalculator, dpsItemsCalculator } from '../dps-calc/calculator';
import { rankIdentifier } from './season-dps/rank';

const SeasonDPS = () => {
  const { user } = useWaxUser();
  const [rank, setRank] = useState('-');
  const [totalDps, setTotalDps] = useState(0);

  const pupskins = useGetSchemaAssets('pupskincards', user?.wallet);
  const puppycards = useGetSchemaAssets('puppycards', user?.wallet);
  const pupitems = useGetSchemaAssets('pupitems', user?.wallet);

  useEffect(() => {
    if (!user) return;
    if (!pupskins || !puppycards || !pupitems) return;

    const skinsDPs = dpsCalculator(pupskins);
    const cardsDps = dpsCalculator(puppycards);
    const realItemsDps = dpsItemsCalculator(pupskins, pupitems, user.wallet);

    const totalDps = skinsDPs + cardsDps + realItemsDps;
    const rank = rankIdentifier(totalDps);

    setTotalDps(totalDps);
    setRank(rank);
  }, [pupskins, puppycards, pupitems, user]);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-8">
      <div className="bg-pastel-blue w-full lg:w-3/5 rounded-3xl p-12 text-white flex flex-col">
        <span className="font-alt uppercase tracking-wide text-xl">Season Rank</span>

        <strong
          title={rank != '-' ? rank : 'No Rank'}
          className="font-black text-5xl md:txt-6xl my-3 uppercase leading-relaxed"
        >
          {rank}
        </strong>

        <a>view perks</a>
      </div>

      <div className="mt-8 lg:mt-0 bg-pastel-blue w-full lg:w-2/5 rounded-3xl p-12 text-white flex flex-col lg:ml-8">
        <span className="font-alt uppercase tracking-wide text-xl">DPS</span>

        <strong className="font-black text-5xl md:txt-6xl my-3 uppercase leading-relaxed tracking-tighter">
          {totalDps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ')}
        </strong>

        <a>dps calculator</a>
      </div>
    </div>
  );
};

export default SeasonDPS;
