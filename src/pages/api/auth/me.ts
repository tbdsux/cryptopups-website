import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '../../../lib/auth';
import methodHandler from '../../../lib/middleware/method';

const me = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req);

  if (session) {
    res.status(200).json({ session });
  } else {
    res.status(200).json({ session: null });
  }
};

export default methodHandler(me, ['GET']);
