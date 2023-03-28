import Image from 'next/image';
import { Star, Timer } from 'phosphor-react';

import { RecipeDisplayContainer } from '@/styles/components/RecipeDisplay';
import { ratingsAverage } from '@/utils/ratingsAverage';
import { convertTime } from '@/utils/convertTime';

interface IRecipeDisplay {
  recipeId: string,
  recipeTitle: string,
  recipePortions: number,
  requiredTime: number,
  ratings: {userId: number, rate: number}[],
  imageURL: string,
  slug: string,
  classname?: string
}

export default function RecipeDisplay({
  recipeId,
  recipeTitle,
  recipePortions,
  requiredTime,
  ratings,
  imageURL,
  slug,
  classname
}: IRecipeDisplay) {
  return (
    <RecipeDisplayContainer href={`/recipe/${slug}`} className={classname}>
      <Image
        src={imageURL}
        alt=''
        width={640}
        height={850}
      />
      <div>
        {recipePortions > 1 ? 
        <span>{recipePortions} porções</span> : 
        <span>{recipePortions} porção</span>
        }
        <span className='icon'>
          <Timer size={16}/>
          {convertTime(requiredTime)}
        </span>
        <p>{recipeTitle}</p>
        <span className='icon'>
          <Star size={16}/>
          {ratingsAverage({ratings}).toLocaleString('en-US', {style: 'decimal', minimumFractionDigits: 1, maximumFractionDigits: 1})}
        </span>
      </div>
    </RecipeDisplayContainer>
  )
}
