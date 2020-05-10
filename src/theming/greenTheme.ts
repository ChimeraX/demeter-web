import DemeterXTheme from './DemeterXTheme';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#d0cec8',
			main: '#514f49',
			dark: '#2e3332',
			contrastText: 'white',
		},
		secondary: {
			light: '#00e676',
			main: '#6c7540',
			dark: '#446c2a',
			contrastText: 'white',
		},
		type: 'dark',
	},
});

const greenTheme: DemeterXTheme = {
	...theme,
	gradientImage: `linear-gradient(315deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.main} 74%)`,
	backgroundImage: `url('./images/kitchen_background.jpg')`,
	landingImage: `url('./images/landing.jpg')`,
	name: 'GREEN_THEME',
};

export default greenTheme;
