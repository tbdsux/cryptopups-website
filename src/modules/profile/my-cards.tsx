import useGetOwnedSchemas from '../../hooks/useGetOwnedSchemas';

const MyCards = () => {
  const data = useGetOwnedSchemas();

  return (
    <div className="mt-16 w-5/6 mx-auto">
      <span className="font-alt uppercase tracking-wide text-xl">My Cards</span>

      <div className="flex items-center justify-center mt-8">
        <div className="border-r border-stone-600 px-16 inline-flex flex-col items-center">
          <p className="text-7xl font-bold">{data?.pupskincards ?? 0}</p>

          <span className="font-bold italic mt-2">pupskins</span>
        </div>

        <div className="border-r border-stone-600 px-16 inline-flex flex-col items-center">
          <p className="text-7xl font-bold">{data?.puppycards ?? 0}</p>

          <span className="font-bold italic mt-2">pupcards</span>
        </div>

        <div className="border-r border-stone-600 px-16 inline-flex flex-col items-center">
          <p className="text-7xl font-bold">{data?.pupitems ?? 0}</p>

          <span className="font-bold italic mt-2">pupitems</span>
        </div>

        <div className="px-16 inline-flex flex-col items-center">
          <p className="text-7xl font-bold">{data?.pupmojicards ?? 0}</p>

          <span className="font-bold italic mt-2">pupmojis</span>
        </div>
      </div>
    </div>
  );
};

export default MyCards;
