type AllianceProps = {
  name: string;
  image: string;
  banner: string;
  links: {
    telegram?: string;
    discord?: string;
    nefty: string;
    twitter: string;
    website?: string;
  };
};

const Alliance: AllianceProps[] = [
  {
    name: 'unaxxtradingcards',
    image: 'https://pbs.twimg.com/profile_images/1424796215154257934/7RhnM9-t_400x400.jpg',
    banner: 'https://pbs.twimg.com/profile_banners/825047544816422913/1628087428/1500x500',
    links: {
      telegram: 'https://t.me/officialunaxxtg',
      nefty: 'https://neftyblocks.com/c/unaxxtrdcrds',
      twitter: 'https://twitter.com/allerkrans92',
      website: 'https://www.unaxx.com/'
    }
  },
  {
    name: 'createdwlove',
    image:
      'https://cdn.discordapp.com/avatars/389563656762818588/6ba24be2707afee65c5a35b0a04fdbac.webp?size=256',
    banner: '',
    links: {
      telegram: 'https://t.me/createdwlove',
      twitter: 'https://twitter.com/esalesonline',
      nefty: 'https://neftyblocks.com/c/createdwlove'
    }
  },
  {
    name: 'konceptonwax',
    image: 'https://pbs.twimg.com/profile_images/1405241058871582721/28ahb3eM_400x400.jpg',
    banner: 'https://pbs.twimg.com/profile_banners/1360192518860771333/1625207611/1500x500',
    links: {
      telegram: 'https://discord.com/invite/RdWPT66FWp',
      nefty: 'https://neftyblocks.com/c/konceptonwax',
      twitter: 'https://twitter.com/konceptonwax'
    }
  },
  {
    name: 'cuteredpanda',
    image: 'https://pbs.twimg.com/profile_images/1393851568139628549/LQLQHRHe_400x400.jpg',
    banner: 'https://pbs.twimg.com/profile_banners/1387016440616669186/1621706270/1500x500',
    links: {
      discord: 'https://discord.gg/tEFPKbPcAG',
      nefty: 'https://neftyblocks.com/c/cuteredpanda',
      website: 'https://www.r-panda.io/',
      twitter: 'https://twitter.com/Rustytheredpan2'
    }
  },
  {
    name: 'catstickers',
    image: 'https://pbs.twimg.com/profile_images/1397872457860661248/Fo8hYoEf_400x400.jpg',
    banner: 'https://pbs.twimg.com/profile_banners/1240921920746520576/1629129749/1500x500',
    links: {
      twitter: 'https://twitter.com/cutecatstickers',
      nefty: 'https://neftyblocks.com/c/catstickerss/',
      discord: 'https://discord.com/invite/wnH3MCm',
      website: 'https://www.catstickersnft.com/'
    }
  },
  {
    name: 'rawr-trading',
    image: 'https://pbs.twimg.com/profile_images/1406455757181263874/mZmexSIQ_400x400.jpg',
    banner: 'https://pbs.twimg.com/profile_banners/1406455675899846661/1624236651/1500x500',
    links: {
      nefty: 'https://neftyblocks.com/c/rawrtrading1',
      twitter: 'https://twitter.com/CardsRawr',
      website: 'https://raw-r.com/',
      discord: 'https://discord.com/invite/TJHWmYrM'
    }
  },
  {
    name: 'demcutefrens',
    image: 'https://pbs.twimg.com/profile_images/1403399587176620037/XN3pBiet_400x400.jpg',
    banner: 'https://pbs.twimg.com/profile_banners/1396831654749016066/1622139986/1500x500',
    links: {
      nefty: 'https://neftyblocks.com/c/demcutefrens',
      twitter: 'https://twitter.com/DemCuteFrens',
      telegram: 'https://t.me/demcutefrens',
      discord: 'https://discord.com/invite/AVWScxCHFJ'
    }
  }
];

export { Alliance };
export type { AllianceProps };
