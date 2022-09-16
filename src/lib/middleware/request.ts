import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

// check if referrer is ok or  not
const validateRequest =
  (handler: NextApiHandler) => (req: NextApiRequest, res: NextApiResponse) => {
    // TODO: should implement a better security in here in the future
    if (
      req.headers.referer?.endsWith('/my-collections') ||
      req.headers.referer?.endsWith('/profile')
    ) {
      return handler(req, res);
    }

    res.status(400).json({ error: true, message: 'Bad Request' });
  };

export default validateRequest;
