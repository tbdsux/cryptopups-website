type AuthUser = {
  wallet: string;
  type: string;
  discordId?: string;
  token: string;
};

type AuthData = AuthUser | Record<string, string>;

export type { AuthUser, AuthData };
