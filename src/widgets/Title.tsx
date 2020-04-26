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
		root: {
			fontSize: '32px',
			fontFamily: 'Dancing Script, cursive',
			userSelect: 'none',
			display: 'contents',
		},
	}),
);

export interface TitleProperties {
	text: string;
	icon: string;
	classes?: {
		icon?: string;
		root?: string;
	};
}

const Title: React.FC<TitleProperties> = (properties) => {
	// properties
	const { text, icon } = properties;

	// classes
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Icon className={classes.icon}>{icon}</Icon>
			{text}
		</div>
	);
};

export default Title;
