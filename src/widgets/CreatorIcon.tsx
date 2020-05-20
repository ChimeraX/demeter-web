import React from 'react';
import { Paper } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DemeterXTheme from '../theming/DemeterXTheme';

const useStyles = makeStyles((theme: DemeterXTheme) =>
	createStyles({
		profileIcon: {
			height: '32px',
			width: '32px',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			border: `${theme.palette.secondary.light} solid 1px`,
			borderRadius: '24px',
			'&:hover': {
				boxShadow: `${theme.palette.secondary.dark} 0 0 0 2px`,
			},
		},
	}),
);

export interface CreatorIconProperties {
	profilePicture: string;
	onClick?: () => void;
}

const CreatorIcon: React.FC<CreatorIconProperties> = (properties) => {
	const { profilePicture = '', onClick } = properties;

	const classes = useStyles();

	return (
		<Paper
			className={classes.profileIcon}
			style={{ backgroundImage: `url('${profilePicture}')` }}
			aria-controls="customized-menu"
			aria-haspopup="true"
			color="primary"
			onClick={onClick}
		/>
	);
};

export default CreatorIcon;
