import { CategoryState } from './Category';
import { RecipeState } from './Recipe';
import ChimeraXState from '@chimerax/common-web/lib/redux/ChimeraXState';
import { UserState } from './User';


export default interface DemeterXState extends ChimeraXState {
    category: CategoryState;
    recipe: RecipeState;
    user: UserState;
}
