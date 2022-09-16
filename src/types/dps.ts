export interface DPSProps {
  error: boolean;
  data: DPSData;
  message: string;
}

export interface DPSData {
  wallet: string;
  id: string;
  dps: Dps;
  role: string;
}

export interface Dps {
  pupitems: Pupitems;
  puppycards: number;
  pupskincards: number;
}

export interface Pupitems {
  raw: number;
  real: number;
}
