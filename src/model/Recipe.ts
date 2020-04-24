export default interface Recipe {
    id: number;
    name: string;
    image: string;
    duration: number;
	categoryId: number;
    calories: number;
    favorites: number;
    favorite: boolean;
    ingredients: Array<QuantifiedIngredient>;
    steps: Array<RecipeStep>;
}

export interface Ingredient {
    id: number;
    name: string;
}

export interface QuantifiedIngredient {
    id: number;
    ingredient: Ingredient;
    quantity: number;
    unit: string;
}

export interface RecipeStep {
    id: number;
    order: number;
    description: string;
}
