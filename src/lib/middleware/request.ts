import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

// check if referrer is ok or  not
const validateRequest =
  (handler: NextApiHandler) => (req: NextApiRequest, res: NextApiResponse) => {
    if (req.headers.referer === process.env.APP_URL + '/my-collections') {
      return handler(req, res);
    }

    res.status(400).json({ error: true, message: 'Bad Request' });
  };

export default validateRequest;
