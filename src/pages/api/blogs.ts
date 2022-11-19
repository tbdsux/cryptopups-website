import { NextApiRequest, NextApiResponse } from 'next';
import { deta } from '../../lib/deta';
import { BASE_POSTS } from '../../modules/blogs/posts';

const fetchPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = deta.Base(BASE_POSTS);

  let r = await db.fetch();
  let allItems = r.items;

  while (r.last) {
    r = await db.fetch({}, { last: r.last });
    allItems.push(...r.items);
  }

  res.status(200).json({ error: false, data: allItems });
};

export default fetchPosts;
