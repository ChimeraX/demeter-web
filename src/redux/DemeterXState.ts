import ChimeraXState from '@chimerax/common-web/lib/redux/ChimeraXState';
import { UserState } from './User';
import { FavoriteState } from './Favorite';
import { DiscoverState } from './Discover';


export default interface DemeterXState extends ChimeraXState {
    favorite: FavoriteState;
    discover: DiscoverState;
    user: UserState;
}
