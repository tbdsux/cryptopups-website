/*
	User Logout API Endpoint
*/

import type { NextApiRequest, NextApiResponse } from "next";
import { getSession, removeSession } from "../../../lib/auth";

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = await getSession(req);

  // clear session cookie
  removeSession(res);

  res.status(200).json({ message: "User logged out." });
};

export default api;
