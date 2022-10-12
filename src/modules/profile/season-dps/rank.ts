const rankIdentifier = (dps: number) => {
  if (dps >= 10000 && dps < 20000) return 'Overlord Pups';

  if (dps >= 20000 && dps < 35000) return 'Apocalyptic Pups';

  if (dps >= 35000 && dps < 60000) return 'Above All Pups';

  if (dps >= 60000 && dps < 100000) return 'Infinity Pups';

  if (dps >= 100000) return 'Eternity Pups';

  return '-';
};

export { rankIdentifier };
