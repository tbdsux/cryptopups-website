import Iron from "@hapi/iron";
import { AuthUser } from "../types/auth";

const encrypt = async (data: AuthUser) => {
  return data && Iron.seal(data, process.env.SECRET_TOKEN || "", Iron.defaults);
};

const decrypt = async (data: string) => {
  return (
    data && Iron.unseal(data, process.env.SECRET_TOKEN || "", Iron.defaults)
  );
};

export { encrypt, decrypt };
