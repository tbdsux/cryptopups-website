/*
	User Logout API Endpoint
*/

import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession, removeSession } from '../../../lib/auth';

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req);
  if (session) {
    // clear session cookie
    removeSession(res);
  }

  res.status(200).json({ error: false, message: 'User logged out.' });
};

export default logout;
