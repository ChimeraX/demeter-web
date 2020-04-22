import React, { useState } from 'react';
import Recipe from '../model/Recipe';
import recipe from '../components/recipeData';
import { Grid } from '@material-ui/core';
import RecipeCard from './RecipeCard';

export interface RecipesGridProperties {
	recipes?: Recipe[];
}

let recipes: Recipe[] = [
	recipe, recipe, recipe, recipe, recipe, recipe, recipe,
];

recipes = recipes.map((recipe, index) => ({ ...recipe, id: index }));

const RecipesGrid: React.FC<RecipesGridProperties> = (properties) => {

	const [focused, setFocused] = useState<Recipe | undefined>(undefined);
	return (
		<Grid container>
			{
				recipes.map(recipe => {
					const isExpanded = focused === recipe;
					return (
						<Grid item xs={isExpanded ? 12 : 6} key={`recipe-${recipe.id}`}>
							<RecipeCard
								recipe={recipe}
								expanded={isExpanded}
								onExpand={() => setFocused(isExpanded ? undefined : recipe)}/>
						</Grid>
					);
				})
			}
		</Grid>
	);
};

export default RecipesGrid;
