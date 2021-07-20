import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState
} from "react";
type AuthContextTypeProps = 'anchor' | 'scatter' | 'wax-cloud' | string

type AuthContextProps = {
  walletId: string;
  setWalletId: Dispatch<SetStateAction<string>>;
  type: AuthContextTypeProps,
  setType: Dispatch<SetStateAction<AuthContextTypeProps>>
};
type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({
  walletId: "",
  setWalletId: () => {},
  type: '',
  setType: () => {}
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [walletId, setWalletId] = useState("");
  const [type, setType] = useState<AuthContextTypeProps>("")

  return (
    <AuthContext.Provider value={{ walletId, setWalletId, type, setType }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
export type { AuthContextProps };

