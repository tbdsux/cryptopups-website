import { getSession } from '@cryptopuppie/next-waxauth';
import { nanoid } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../lib/deta';
import methodHandler from '../../lib/middleware/method';
import validateRequest from '../../lib/middleware/request';
import { AuthUser } from '../../types/auth';

const getToken = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req);

  const { wallet, type } = session;

  if (!session) {
    res.status(403).json({ error: true, message: 'Invalid user session!' });
    return;
  }

  const data = (await db.get(session.wallet)) as Record<string, any>;
  if (data != null) {
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

  res.status(200).json({
    error: false,
    data: d
  });
};

export default methodHandler(validateRequest(getToken), ['GET']);
