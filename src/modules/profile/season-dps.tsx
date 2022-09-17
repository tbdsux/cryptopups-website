import useGetDPS from '../../hooks/useGetDPS';

const SeasonDPS = () => {
  const data = useGetDPS();

  const dps = () => {
    if (!data) return '-';

    return data.data.dps.puppycards + data.data.dps.pupskincards + data.data.dps.pupitems.real;
  };

  return (
    <div className="flex items-center justify-between mt-8">
      <div className="bg-pastel-blue w-3/5 rounded-3xl p-12 text-white flex flex-col">
        <span className="font-alt uppercase tracking-wide text-xl">Season Rank</span>

        <strong className="font-bold text-7xl my-3 uppercase leading-relaxed">
          {data?.data.role ?? '-'}
        </strong>

        <a>view perks</a>
      </div>

      <div className="bg-pastel-blue w-2/5 rounded-3xl p-12 text-white flex flex-col ml-8">
        <span className="font-alt uppercase tracking-wide text-xl">DPS</span>

        <strong className="font-bold text-7xl my-3 uppercase leading-relaxed">{dps()}</strong>

        <a>dps calculator</a>
      </div>
    </div>
  );
};

export default SeasonDPS;
