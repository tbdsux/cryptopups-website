import { useGetRewardsConfig } from '../../hooks/useGetRewardsConfig';
import { useGallery } from '../gallery/provider';
import { SelectTemplateProps, useClaimReward } from './provider';
import RewardTemplateContainer from './template-container';

const ClaimRewardsForm = () => {
  const { set, images } = useGallery();
  const { setSelections, assets } = useClaimReward();
  const config = useGetRewardsConfig();

  const filterImages = images.filter((i) => {
    return set.templates.includes(Number(i.template_id));
  });

  const autoSelect = () => {
    if (!assets) return;

    let sels: Record<number, SelectTemplateProps> = {};

    for (const img of filterImages) {
      const filter = assets
        .filter(
          (i) =>
            i.template?.template_id === img.template_id && !config?.used_assets.includes(i.asset_id)
        )
        .sort((a, b) => Number(b.template_mint) - Number(a.template_mint));

      if (filter.length == 0) continue;

      sels = {
        ...sels,
        [img.template_id]: {
          template_id: Number(filter[0].template?.template_id),
          mint: filter[0].template_mint,
          assetid: filter[0].asset_id
        }
      };
    }

    setSelections(sels);
  };

  return (
    <div className="mt-2">
      <p className="text-left text-sm font-medium tracking-wide">
        Please select the NFTs you want to use to claim the rewards.
      </p>

      <div className="text-right">
        <button
          onClick={autoSelect}
          className="bg-gray-400 hover:bg-gray-500 text-white py-1 px-3 rounded-lg duration-300 text-sm"
        >
          auto select
        </button>
      </div>

      <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center ">
        {filterImages.map((i, index) => (
          <RewardTemplateContainer
            key={index}
            template_id={i.template_id}
            src={`https://atomichub-ipfs.com/ipfs/${i.immutable_data.img}`}
            alt={i.immutable_data.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClaimRewardsForm;
