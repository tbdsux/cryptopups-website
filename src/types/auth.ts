import { WaxWalletType } from '@cryptopuppie/next-waxauth';

type AuthUser = {
  key?: string;
  wallet: string;
  type: WaxWalletType;
  token: string;
  linked?: boolean;
};

type AuthData = AuthUser | Record<string, string>;

export type { AuthUser, AuthData };
