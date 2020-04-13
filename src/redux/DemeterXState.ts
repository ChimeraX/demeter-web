import ChimeraXState from '@chimerax/common-app/lib/redux/ChimeraXState';
import { ThemeState } from '@chimerax/common-app/lib/redux/reducers/theme';
import { CategoryState } from './Category';
import ChimeraXTheme, { ThemeType } from '@chimerax/common-app/lib/theming/ChimeraXTheme';

interface RecipeState {}

export default interface DemeterXState extends ChimeraXState {
    theme: {
        theme: ChimeraXTheme;
        type: ThemeType;
    };
    category: CategoryState;
    recipe: RecipeState;
}
