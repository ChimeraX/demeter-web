import React, { useState } from 'react';
import Recipe from '../model/Recipe';
import { Grid, Modal } from '@material-ui/core';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';

export interface RecipesGridProperties {
	recipes: Recipe[];
	onSave: (recipe: Recipe) => void;
	onFavorite: (recipe: Recipe) => void;
}

const RecipesGrid: React.FC<RecipesGridProperties> = (properties) => {
	// properties
	const { recipes, onFavorite } = properties;

	const recipesBits = [];
	for (let i = 0; i < recipes.length; i++) {
		recipesBits.push(recipes.slice(i * 4, (i + 1) * 4));
	}

	// internal state
	const [selected, setSelected] = useState<Recipe | undefined>(undefined);

	// handlers
	const handleClose = () => setSelected(undefined);

	return (
		<div>
			<Grid container>
				{
					recipesBits.map(recipeList => (
						<Grid container item xs={12}>
							{
								recipeList.map(recipe => {
									return (
										<Grid item xs={3} key={`recipe-${recipe.id}`}>
											<RecipeCard
												recipe={recipe}
												onFavorite={() => onFavorite(recipe)}
												onSelect={() => setSelected(recipe)}
											/>
										</Grid>
									);
								})
							}
						</Grid>
					))
				}
			</Grid>
			<Modal
				open={selected !== undefined}
				onClose={handleClose}>
				{selected ? <RecipeModal recipe={selected}/> : <div>NOTHING</div>}
			</Modal>
		</div>
	);
};

export default RecipesGrid;
