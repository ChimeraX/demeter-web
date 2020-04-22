import ChimeraXState from '@chimerax/common-app/lib/redux/ChimeraXState';
import { CategoryState } from './Category';

interface RecipeState {}

export default interface DemeterXState extends ChimeraXState {
    category: CategoryState;
    recipe: RecipeState;
}
