import React from 'react';
import Recipe from '../model/Recipe';
import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	Icon,
	IconButton,
	Typography,
} from '@material-ui/core';
import RecipeCard from './RecipeCard';

export interface RecipesGridProperties {
	recipes: Recipe[];
}

const RecipesGrid: React.FC<RecipesGridProperties> = (properties) => {
	// properties
	const { recipes } = properties;

	return (
		<Grid container>
			{
				recipes.map(recipe => {
					return (
						<Grid item xs={3} key={`recipe-${recipe.id}`}>
							<RecipeCard recipe={recipe}/>
						</Grid>
					);
				})
			}
		</Grid>
	);
};

export default RecipesGrid;
