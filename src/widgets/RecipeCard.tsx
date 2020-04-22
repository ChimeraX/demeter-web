import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';
import Recipe from '../model/Recipe';
import recipe from '../components/recipeData';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			// maxWidth: 345
			backgroundImage: `url('${recipe.image}')`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			margin: '20px',
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
	onExpand?: () => void;
	onFavorite?: () => void;
	onSave?: () => void;
	onShare?: () => void;
}

const RecipeCard: React.FC<RecipeCardProperties> = (properties) => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(properties.expanded);

	useEffect(() => {
		setExpanded(properties.expanded);
	}, [properties.expanded]);

	const { recipe, onExpand } = properties;


	const handleExpandClick = () => {
		setExpanded(!expanded);
		onExpand && onExpand();
	};


	const RecipeCardHeader = () => (
		<CardHeader
			action={
				<IconButton aria-label="settings">
					<Icon>more_vert</Icon>
				</IconButton>
			}
			title={recipe.name}
			subheader={recipe.description}
		/>
	);

	const RecipeCardContent = () => (
		<CardContent>
			<Typography variant="body2" color="textSecondary" component="p">
				{recipe.description}
			</Typography>
		</CardContent>
	);

	const RecipeCardActions = () => (
		<CardActions disableSpacing>
			<IconButton aria-label="add to favorites">
				<Icon>favorite</Icon>
			</IconButton>
			<IconButton aria-label="share">
				<Icon>share</Icon>
			</IconButton>
			<IconButton
				className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
				onClick={handleExpandClick}
				aria-expanded={expanded}
				aria-label="show more"
			>
				<Icon>expand_less</Icon>
			</IconButton>
		</CardActions>
	);

	const collapse = () => (
		<Collapse in={expanded} timeout="auto" unmountOnExit>
			<CardContent>
				<Typography paragraph>Steps:</Typography>
				{recipe.steps.map((step) => (
					<Card className={classes.step} key={step.id}>
						<CardContent>
							<Typography paragraph key={`${step.id}`}>
								{step.description}
							</Typography>
						</CardContent>
					</Card>
				))}
			</CardContent>
		</Collapse>
	);

	return (
		<Card className={classes.root}>
			<RecipeCardHeader/>
			<RecipeCardContent/>
			<RecipeCardActions/>
			{collapse()}
		</Card>
	);
};

export default RecipeCard;
