import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { CardMedia, Icon } from '@material-ui/core';
import Recipe from '../model/Recipe';
import UserWidget from '../components/UserWidget';
import DemeterXTheme from '../theming/DemeterXTheme';

const useStyles = makeStyles((theme: DemeterXTheme) =>
	createStyles({
		root: {
			margin: '20px',
			background: theme.palette.primary.dark
		},
		media: {
			paddingTop: '50%',
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(-180deg)',
		},
		avatar: {
			backgroundColor: theme.palette.primary.main,
		},
		step: {
			backgroundColor: theme.palette.primary.main,
		},
	}),
);

export interface RecipeCardProperties {
	recipe: Recipe;
	expanded?: boolean;
	onFavorite?: () => void;
	onSave?: () => void;
}

const RecipeCard: React.FC<RecipeCardProperties> = (properties) => {
	// properties
	const { recipe } = properties;

	// classes
	const classes = useStyles();

	// internal state

	// handlers

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={recipe.image}
				title={recipe.name}
			/>
			<CardHeader
				avatar={
					<UserWidget/>
				}
				title={recipe.name}
			/>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<Icon>favorite</Icon>
				</IconButton>
				{24}
			</CardActions>
		</Card>
	);
};

export default RecipeCard;
