import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../db.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req

  switch (method) {
    case 'GET':
      const { _sort, _order, _limit, q, slug } = query
      
      let posts = db.posts

      if (q) {
        posts = posts.filter(item => item.title.includes(String(q)) || item.content.filter(content => content.paragraph.includes(String(q)) || content.subtitle?.includes(String(q))).length > 0 || item.author.includes(String(q)) || item.slug.includes(String(q)))
      }
      if (slug) {
        posts = posts.filter(item => item.slug === slug)
      }
      if (_sort) {
        posts = posts.sort((a, b) =>
        _order === 'desc' ? b.timeStamp - a.timeStamp : a.timeStamp - b.timeStamp
        )
      }
      if (_limit) {
        posts = posts.slice(0, Number(_limit));
      }
      res.status(200).json(posts)
      break
    case 'POST':
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
