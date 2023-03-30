import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../db.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req

  switch (method) {
    case 'GET':
      const { _limit, category } = query
      
      let products = db.productsPreview
      if (category) {
        if (category === 'utensils') products = products.filter(item => item.category === 'utensils')
        else if (category === 'books') products = products.filter(item => item.category === 'books')
        else if (category === 'ornaments') products = products.filter(item => item.category === 'ornaments')
        else if (category === 'ceramics') products = products.filter(item => item.category === 'ceramics')
      }
      if (_limit) {
        products = products.slice(0, Number(_limit));
      }
      res.status(200).json(products)
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
