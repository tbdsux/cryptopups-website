type AuthUser = {
  key: string;
  wallet: string;
  type: AuthContextTypeProps;
  token: string;
  linked?: boolean;
};

type AuthContextTypeProps = 'anchor' | 'wax-cloud';

type AuthData = AuthUser | Record<string, string>;

export type { AuthUser, AuthData };
