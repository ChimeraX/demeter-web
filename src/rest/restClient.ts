import RestClient from '@chimerax/common-app/lib/rest/RestClient';
import { getCookies } from '@chimerax/common-web/lib/util/cookies';

const token = getCookies().d_token;

const headers = {
	authorization: `Bearer ${token}`,
};

export default new RestClient({ headers: token ? headers : {} });
