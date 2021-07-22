import { nanoid } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createSession } from '../../../lib/auth';
import methodHandler from '../../../lib/middleware/method';
import validateRequest from '../../../lib/middleware/request';
import { redis } from '../../../lib/redis';
import { AuthUser } from '../../../types/auth';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { wallet, type } = req.body;

  if (!wallet || !type) {
    res.status(400).json({ error: true, data: {}, message: 'Missing values!' });
    return;
  }

  const r = redis();

  // check if logged in / data already exists in database
  const check = await r.get(`_wallet_${wallet}`);
  if (check) {
    const d = await r.hgetall(check);

    // store session
    await createSession(res, d);

    res.status(200).json({
      error: false,
      data: d
    });
    return;
  }

  // generate tokenid for confirmation
  const _tokenId = nanoid(12);

  // try to create a new account? / data
  const d: AuthUser = {
    wallet,
    type,
    token: _tokenId
  };

  await r.hset(_tokenId, d);
  await r.set(`_wallet_${wallet}`, _tokenId);

  // store session
  await createSession(res, d);

  res.status(200).json({
    error: false,
    data: {
      wallet,
      type,
      token: _tokenId
    }
  });
};

export default methodHandler(validateRequest(login), ['POST']);
