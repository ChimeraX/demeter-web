import ChimeraXState from '@chimerax/common-app/lib/redux/ChimeraXState';
import { CategoryState } from './Category';
import { RecipeState } from './Recipe';


export default interface DemeterXState extends ChimeraXState {
    category: CategoryState;
    recipe: RecipeState;
}
