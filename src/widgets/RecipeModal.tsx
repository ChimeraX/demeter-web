import React, { useEffect, useState } from 'react';
import { CardContent, CardMedia, Icon, Modal, Typography } from '@material-ui/core';
import Recipe from '../model/Recipe';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DemeterXTheme from '../theming/DemeterXTheme';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CreatorIcon from './CreatorIcon';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FlexGrow from '@chimerax/common-web/lib/widgets/FlexGrow';

const useStyles = makeStyles((theme: DemeterXTheme) =>
	createStyles({
		root: {
			outline: 'none',
			width: '600px',
			margin: '20px',
			background: theme.palette.primary.dark,
			position: 'absolute',
			top: '50%', left: '50%',
			transform: 'translate(-50%, -50%)',
			overflow: 'auto'
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
	recipe?: Recipe;
	onFavorite: () => void;
}

const RecipeModal: React.FC<RecipeModalProperties> = (properties) => {
	// properties
	const { recipe, onFavorite } = properties;

	const classes = useStyles();

	const [open, setOpen] = useState(recipe !== undefined);

	const steps = recipe?.steps || [];

	useEffect(() => {
		setOpen(recipe !== undefined);
	}, [recipe]);

	const handleClose = () => setOpen(false);

	if (open) {
		return (
			<Modal
				open={open}
				onClose={handleClose}>
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
									<Typography key={step.id}>
										{step.description}
									</Typography>
								);
							})
						}
					</CardContent>
				</Card>
			</Modal>
		);
	} else {
		return null;
	}
};

export default RecipeModal;
