import React from 'react';
import Recipe from '../model/Recipe';

export interface RecipesGridProperties {
	recipes?: Recipe[];
}

const RecipesGrid: React.FC<RecipesGridProperties> = (properties) => {
	return <div>RecipesGrid</div>;
};

export default RecipesGrid;
