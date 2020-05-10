import RestClient from '@chimerax/common-app/lib/rest/RestClient';
import { getCookies } from '@chimerax/common-web/lib/util/cookies';

const token = getCookies();

export default new RestClient({
	headers: {
		authorization: 'Bearer ' + token
	},
});
