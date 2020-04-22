import DemeterXTheme from './DemeterXTheme';
import { createMuiTheme } from '@material-ui/core';
import { green, grey } from '@material-ui/core/colors';



const basicTheme = createMuiTheme({
	palette: {
		primary: grey,
		secondary: green,
		type: 'dark',
	},
});

const greenTheme: DemeterXTheme = {
	...basicTheme,
	name: 'GREEN_THEME',
};

export default greenTheme;
