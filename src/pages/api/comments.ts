import { NextApiRequest, NextApiResponse } from 'next';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

import db from '../../../db.json';
import { api } from '@/services/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req

  switch (method) {
    case 'GET':
      const { recipeId, _expand} = query
      let comments = db.comments

      if (recipeId) {
        comments = comments.filter(item => item.recipeId === recipeId)
      }
      if (_expand === 'accounts') {
        const accountIds = comments.map((comment) => comment.accountsId);
        const response = await api.get(`/api/accounts?ids=${accountIds.join(',')}`)        
        const accountsFound = await response.data

        comments.forEach((comment) => {
          Object.assign(comment, {accounts: accountsFound.find((account: any) => account.id === comment.accountsId)})
        });
      }

      res.status(200).json(comments)
      break
    case 'POST':
      db.comments.push(body)
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
