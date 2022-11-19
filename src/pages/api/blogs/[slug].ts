import { NextApiRequest, NextApiResponse } from 'next';
import { deta } from '../../../lib/deta';
import { BASE_POSTS } from '../../../modules/blogs/posts';

const getPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  if (slug === undefined) return; // TODO: need to check on this

  const db = deta.Base(BASE_POSTS);

  const r = await db.get(Array.isArray(slug) ? slug.join('') : slug);
  if (r == null) {
    res.status(404).json({ error: true, message: 'Post not found.' });
  }

  res.status(200).json({ error: false, data: r });
};

export default getPost;
