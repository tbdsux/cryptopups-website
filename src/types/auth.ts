type AuthUser = {
  wallet: AuthContextTypeProps;
  type: string;
  discordId?: string;
  token: string;
};

type AuthContextTypeProps = 'anchor' | 'wax-cloud';

type AuthData = AuthUser | Record<string, string>;

export type { AuthUser, AuthData };
