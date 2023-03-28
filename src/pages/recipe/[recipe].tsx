import Image from 'next/image';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { CookingPot, Star, StarHalf, Timer } from 'phosphor-react';
import { api } from '@/services/api';

import { ratingsAverage } from '@/utils/ratingsAverage';
import { convertTime } from '@/utils/convertTime';

import { RecipeContainer, RecipeInfo, RecipeInformationContainer, RecipeMain, SocialMediaShare } from '@/styles/pages/Recipe';

import FacebookIcon from '../../assets/social Media/Facebook.svg';
import TwitterIcon from '../../assets/social Media/Twitter.svg';
import PinterestIcon from '../../assets/social Media/Pinterest.svg';
import { RecipeInstructions } from '@/components/RecipeInstructions';
import { AsideContent } from '@/components/AsideContent';
import { Comments } from '@/components/Comments';

interface IRecipeData {
  id: string,
  title: string,
  description: string,
  imageURL: string,
  category: string,
  ratings: {userId: number, rate: number}[],
  portions: number,
  requiredTime: number,
  ingredients: string[],
  preparation: string []
}

export default function Recipe(props : IRecipeData) {  
  const rateAvg = ratingsAverage({ratings: props.ratings})

  const fullStarsAmount = []
  for(let i=0; i< Math.trunc(rateAvg); i++) {
    fullStarsAmount.push(<Star size={32} weight='fill'/>)
  }

  const halfStar = rateAvg % 1 >= 0.5

  const emptyStarsAmount = []
  let counter = 0
  if (halfStar) counter++
  for(let i=0; i < (5 - Math.trunc(rateAvg) - counter); i++) {
    emptyStarsAmount.push(<Star size={32}/>)
  }

  return (
    <>
    <RecipeContainer>
      <RecipeInformationContainer>
        <div className='photo'>
          <Image
            src={props.imageURL}
            alt=''
            width={560}
            height={430}
          />
          <SocialMediaShare>
            <p>Compartilhar</p>
            <Link href='https://github.com/DarkMetaK'>
              <Image
                src={FacebookIcon}
                alt=''
                width={32}
                height={32}
              />
            </Link>
            <Link href='https://github.com/DarkMetaK'>
              <Image
                src={TwitterIcon}
                alt=''
                width={32}
                height={32}
              />  
            </Link>
            <Link href='https://github.com/DarkMetaK'>
              <Image
                src={PinterestIcon}
                alt=''
                width={32}
                height={32}
              />  
            </Link>
          </SocialMediaShare>
        </div>

        <div className='info'>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <RecipeInfo>
            <div className='rating'>
              <div className='stars'>
                {
                  fullStarsAmount.map((item) => item)
                }
                {halfStar && <StarHalf size={32} weight='fill'/>}
                {
                  emptyStarsAmount.map((item) => item)
                }
              </div>
              <p>Avalie essa receita</p>
            </div>
            <div className='recipeInfo'>
              <div>
                <Timer size={32}/>
                <p>{convertTime(props.requiredTime)}</p>
              </div>
              <div>
                <CookingPot size={32}/>
                <p>{`${props.portions} ${props.portions > 1 ? 'porções' : 'porção'}`}</p>
              </div>
            </div>
          </RecipeInfo>
        </div>
      </RecipeInformationContainer>
      
      <RecipeMain>
        <div>
          <div className='ingredients'>
            <h2>Ingredientes</h2>
            <RecipeInstructions type='ingredients' ingredients={props.ingredients}/>
          </div>
          <div className='preparation'>
            <h2>Modo de Preparo</h2>
            <RecipeInstructions type='preparation' preparation={props.preparation}/>
          </div>
        </div>
        <AsideContent />
      </RecipeMain>
    </RecipeContainer>
    <Comments recipeId={props.id}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<any, {recipe: string}> = async({query}) => {

  if (!query.recipe) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  let recipeData = {}

  try {
    const recipeInfo = await api.get(`/recipes?slug=${query.recipe}`)
    if (recipeInfo.data.length) {
      recipeData = recipeInfo.data[0]
    }
    else {
      return {
        notFound: true
      }
    }
  }
  catch (error) {
    console.log(error)
    return {
      notFound: true
    }
  }

  return {
    props: {
      ...recipeData
    }
  }
}