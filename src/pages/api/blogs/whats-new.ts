import { NextApiRequest, NextApiResponse } from 'next';
import { deta } from '../../../lib/deta';
import { BASE_WHATS_NEW } from '../../../modules/blogs/posts';

const whatsNewApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = deta.Base(BASE_WHATS_NEW);

  if (req.method == 'GET') {
    // get the data
    const r = await db.get('__default');
    res.status(200).json({ error: false, data: r });
    return;
  }

  res.status(405).json({ error: true, message: 'Method not allowed.' });
};

export default whatsNewApi;
