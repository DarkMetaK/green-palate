import { NextApiRequest, NextApiResponse } from 'next';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

import db from '../../../db.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req

  switch (method) {
    case 'GET':
      const { email, password, ids } = query
      let accounts = db.accounts

      if (email) {
        accounts = accounts.filter(item => item.email === email)
      }
      if (email && password) {
        accounts = accounts.filter(item => item.email === email && item.password === password)
      }
      if (ids) {
        const arrayOfId = String(ids).split(',')
        accounts = accounts.filter(account => arrayOfId.includes(account.id))
      }
      res.status(200).json(accounts)
      break
    case 'POST':
      db.accounts.push(body)
      try {
        const filePath = resolve(process.cwd(), 'db.json');
        writeFileSync(filePath, JSON.stringify(db, null, 2));
        res.status(201).json(body);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while persisting data' });
      }
      break
    case 'PUT':
      break
    case 'DELETE':
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
