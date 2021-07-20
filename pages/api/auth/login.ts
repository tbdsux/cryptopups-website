import type { NextApiRequest, NextApiResponse } from "next";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { walletId, type } = req.body;

  if (!walletId || !type) {
    res.status(400).json({ error: true, data: {} });
    return;
  }

  //   if (login) {
  //     const token = login.secret;
  //     const u = await user.obtainUser(token, email);

  //     const username = u.data.username;
  //     const userData = <UserProps>{
  //       username,
  //       email,
  //       token,
  //     };

  //     // create a new session
  //     await createSession(res, userData);

  //     res.status(200).json({ userData });
  //   } else {
  //     res.status(401).json({ login: "failed" });
  //   }
};

export default login;
