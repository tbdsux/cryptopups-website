const rankIdentifier = (dps: number) => {
  if (dps >= 3000 && dps < 5000) return 'Warrior Pups';

  if (dps >= 5000 && dps < 8000) return 'Knight Pups';

  if (dps >= 8000 && dps < 10000) return 'Overlord Pups';

  if (dps >= 10000 && dps < 25000) return 'Pups Apocalypse';

  if (dps >= 25000 && dps < 70000) return 'Pups Above All';

  if (dps >= 70000 && dps < 145000) return 'Doggos of Infinity';

  if (dps >= 145000) return 'Doggos of Eternity';

  return '-';
};

export { rankIdentifier };
