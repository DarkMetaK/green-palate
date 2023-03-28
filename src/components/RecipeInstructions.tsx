import { PreparationItem, RecipeInstructionsContainer } from '@/styles/components/RecipeInstructions';
import { CheckItem } from './CheckItem';

interface IRecipeInstructions {
  type: 'ingredients' | 'preparation',
  ingredients?: string[],
  preparation?: string []
}

export function RecipeInstructions({type, ingredients, preparation} : IRecipeInstructions) {
  if (type === 'ingredients') {
    return (
      <RecipeInstructionsContainer>
        {ingredients!.map(item => <CheckItem key={item} item={item}/>)}
      </RecipeInstructionsContainer>
    )
  }
  return (
    <RecipeInstructionsContainer>
      {preparation!.map((item, index)  => (
        <PreparationItem key={item}>
          <span>{`${index + 1}.`}</span>
          <p>{item}</p>
        </PreparationItem>
      ))}
    </RecipeInstructionsContainer>
  )
}
