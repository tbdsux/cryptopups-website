import { nanoid } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createSession } from '../../../lib/auth';
import { db } from '../../../lib/deta';
import methodHandler from '../../../lib/middleware/method';
import validateRequest from '../../../lib/middleware/request';
import { AuthUser } from '../../../types/auth';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { wallet, type } = req.body;

  if (!wallet || !type) {
    res.status(400).json({ error: true, data: {}, message: 'Missing values!' });
    return;
  }

  const data = (await db.get(wallet)) as Record<string, any>;
  if (data != null) {
    // data exists
    await createSession(res, data);

    res.status(200).json({
      error: false,
      data
    });
    return;
  }

  // generate tokenid for confirmation
  const _tokenId = nanoid(20);

  // try to create a new account? / data
  const d: AuthUser = {
    wallet,
    type,
    token: _tokenId
  };

  await db.put(d, wallet);

  // store session
  await createSession(res, d);

  res.status(200).json({
    error: false,
    data: d
  });
};

export default methodHandler(validateRequest(login), ['POST']);
