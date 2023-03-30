import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../db.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req

  switch (method) {
    case 'GET':
      const { _limit, category, slug, q } = query
      
      let recipes = db.recipes

      if (q) {
        recipes = recipes.filter(item => item.title.includes(String(q)) || item.ingredients.includes(String(q)) || item.description.includes(String(q)) || item.preparation.includes(String(q)) || item.slug.includes(String(q)) || item.category.includes(String(q)))
      }
      if (category) {
        if (category === 'main') recipes = recipes.filter(item => item.category === 'main')
        else if (category === 'appetizer') recipes = recipes.filter(item => item.category === 'appetizer')
        else if (category === 'drinks') recipes = recipes.filter(item => item.category === 'drinks')
        else if (category === 'dessert') recipes = recipes.filter(item => item.category === 'dessert')
        else if (category === 'snacks') recipes = recipes.filter(item => item.category === 'snacks')
        else if (category === 'breakfast') recipes = recipes.filter(item => item.category === 'breakfast')
      }
      if (slug) {
        recipes = recipes.filter(item => item.slug === slug)
      }
      if (_limit) {
        recipes = recipes.slice(0, Number(_limit));
      }
      res.status(200).json(recipes)
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
