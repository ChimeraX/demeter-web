import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { CardContent, CardMedia, Icon } from '@material-ui/core';
import Recipe from '../../model/Recipe';
import DemeterXTheme from '../../theming/DemeterXTheme';
import FlexGrow from '@chimerax/common-web/lib/widgets/FlexGrow';
import CreatorIcon, { CreatorIconProperties } from '../CreatorIcon';

const useStyles = makeStyles((theme: DemeterXTheme) =>
	createStyles({
		root: {
			height: '500px',
			width: '500px',
			margin: '20px',
			background: theme.palette.primary.dark,
			position: 'absolute',
			top: '50%', left: '50%',
			transform: 'translate(-50%, -50%)',
		},
		media: {
			paddingTop: '50%',
		},
		favorite: {
			color: 'red',
		}
	}),
);


export interface RecipeDetailsContentProperties {
	iconProperties: CreatorIconProperties;
	recipe?: Recipe;
	onFavorite?: () => void;
}

const RecipeDetailsContent: React.FC<RecipeDetailsContentProperties> = (properties) => {

	// properties
	const { recipe, onFavorite } = properties;

	const steps = recipe?.steps || [];

	// classes
	const classes = useStyles();

	// internal state

	// handlers

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={recipe?.image}
				title={recipe?.name}
			/>
			<CardHeader
				avatar={
					<CreatorIcon profilePicture={recipe?.creator || ''}/>
				}
				title={recipe?.name}
			/>
			<CardActions>
				<IconButton
					onClick={() => onFavorite && onFavorite()}>
					<Icon className={classes.favorite}>
						{recipe?.favorite ? 'favorite' : 'favorite_border'}
					</Icon>
				</IconButton>
				{recipe?.favorites}
				<Icon>schedule</Icon>
				{recipe?.duration}
				<FlexGrow/>
			</CardActions>
			<CardContent>
				{
					steps.sort((a, b) => a.order - b.order).map((step) => {
						return (
							<div>
								{step.description}
							</div>
						);
					})
				}
			</CardContent>
		</Card>
	);
};

export default RecipeDetailsContent;
