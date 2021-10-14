interface DPSProps {
  dps: DPSInfoProps;
  user: DPSUserProps;
  wallet: string;
}

interface DPSInfoProps {
  pupcards: number;
  pupitems: {
    raw: number;
    real: number;
  };
  pupskins: number;
}

interface DPSUserProps {
  avatar: string;
  id: string;
  tag: string;
  username: string;
}

export type { DPSProps, DPSInfoProps, DPSUserProps };
