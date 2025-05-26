import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET!;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { uid, email } = req.body;
    const token = jwt.sign({ uid, email }, secret, { expiresIn: "1h" });

    res.status(200).json({ token });
  } else {
    res.status(405).end();
  }
}
