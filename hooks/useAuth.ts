import { useContext } from "react";
import { AuthContext } from "../lib/auth-provider";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("need to wrap the component to authprovider");
  }

  return context;
};

export default useAuth;
