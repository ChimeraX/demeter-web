import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';
import DemeterXTheme from '../theming/DemeterXTheme';

const useStyles = makeStyles((theme: DemeterXTheme) =>
	createStyles({
		icon: {
			color: theme.palette.secondary.light,
			textShadow: 'none',
			fontSize: '32px',
		},
		title: {
			fontSize: '32px',
			fontWeight: 'bold',
			fontFamily: 'Cinzel, cursive',
			userSelect: 'none',
			display: 'contents',
		},
	}),
);

export interface TitleProperties {
	text: string;
	icon: string;
}

const Title: React.FC<TitleProperties> = (properties) => {
	// properties
	const { text, icon } = properties;

	// classes
	const classes = useStyles();

	return (
		<div className={classes.title}>
			<Icon className={classes.icon}>{icon}</Icon>
			{text}
		</div>
	);
};

export default Title;
