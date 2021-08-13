import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import useSWR from 'swr';
import { AuthData } from '../types/auth';

type AuthContextProps = {
  session?: AuthData;
  setSession: Dispatch<SetStateAction<AuthData | undefined>>;
};
type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({
  setSession: () => {}
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<AuthData | undefined>();

  const { data } = useSWR('/api/auth/me');

  useEffect(() => {
    if (data) {
      setSession(data.session);
    }
  }, [data]);

  return <AuthContext.Provider value={{ session, setSession }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext };
export type { AuthContextProps };
