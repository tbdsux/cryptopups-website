/*
	User Logout API Endpoint
*/

import type { NextApiRequest, NextApiResponse } from "next";
import { removeSession } from "../../../lib/auth";

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  // clear session cookie
  removeSession(res);

  res.status(200).json({ error: false, message: "User logged out." });
};

export default api;
