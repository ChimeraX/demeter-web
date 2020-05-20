import React from 'react';
import Recipe from '../model/Recipe';
import { Grid, useMediaQuery } from '@material-ui/core';
import RecipeCard from './RecipeCard';
import { useTheme } from '@material-ui/core/styles';

export interface RecipesGridProperties {
	recipes: Recipe[];
	onSave: (recipe: Recipe) => void;
	onFavorite: (recipe: Recipe) => void;
	onClick: (recipe: Recipe) => void;
}

const RecipesGrid: React.FC<RecipesGridProperties> = (properties) => {
	// properties
	const { recipes, onFavorite, onClick } = properties;

	const theme = useTheme();
	const xs = useMediaQuery(theme.breakpoints.up('xs'));
	const sm = useMediaQuery(theme.breakpoints.up('sm'));
	const md = useMediaQuery(theme.breakpoints.up('md'));
	const lg = useMediaQuery(theme.breakpoints.up('lg'));

	const cols = ((): 2 | 3 | 4 => {
		switch (true) {
			case lg:
				return 4;
			case md:
				return 3;
			case sm:
				return 2;
			case xs:
				return 2;
			default:
				return 4;
		}
	})();

	const colSize = (12 / cols) as (3 | 4 | 6);

	const rows = [];
	for (let i = 0; i < recipes.length; i++) {
		rows.push(recipes.slice(i * cols, (i + 1) * cols));
	}

	return (
		<Grid container>
			{
				rows.map((row, index) => (
					<Grid key={`row-${index}`} container item xs={12}>
						{
							row.map(recipe => {
								return (
									<Grid item xs={colSize} key={`recipe-${recipe.id}`}>
										<RecipeCard
											recipe={recipe}
											onFavorite={() => onFavorite(recipe)}
											onClick={() => onClick(recipe)}
											iconProperties={{
												profilePicture: recipe.creator,
												onClick: () => {
												},
											}}
										/>
									</Grid>
								);
							})
						}
					</Grid>
				))
			}
		</Grid>
	);
};

export default RecipesGrid;
