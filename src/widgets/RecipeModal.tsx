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
import FlexGrow from '@chimerax/common-web/lib/widgets/FlexGrow';

const useStyles = makeStyles((theme: DemeterXTheme) =>
	createStyles({
		root: {
			height: '100px',
			width: '100px',
			margin: '20px',
			background: theme.palette.primary.dark,
		},
		media: {
			paddingTop: '50%',
		},
		favorite: {
			color: 'red',
		},
	}),
);

export interface RecipeModalProperties {
	recipe: Recipe;
	onFavorite?: () => void;
	onSave?: () => void;
}

const RecipeModal: React.FC<RecipeModalProperties> = (properties) => {
	// properties
	const { recipe, onFavorite } = properties;

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
			<CardActions>
				<IconButton
					onClick={() => onFavorite && onFavorite()}>
					<Icon className={classes.favorite}>
						{recipe.favorite ? 'favorite' : 'favorite_border'}
					</Icon>
				</IconButton>
				{recipe.favorites}
				<Icon>schedule</Icon>
				{recipe.duration}
				<FlexGrow/>
			</CardActions>
		</Card>
	);
};

export default RecipeModal;
