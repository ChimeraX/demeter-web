import React from 'react';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ChimeraXTheme from '@chimerax/common-web/lib/theming/ChimeraXTheme';

const useStyles = makeStyles((theme: ChimeraXTheme) => {
	return createStyles({
		root: {
			fontFamily: 'arial',
			textTransform: 'none'
		}
	});
});

export interface ChimeraXProperties {
	onClick: () => void;
}

const ChimeraX: React.FC<ChimeraXProperties> = (properties) => {
	const { onClick } = properties;

	const classes = useStyles();

	return (
		<Button
			onClick={onClick}
			fullWidth
			color="secondary"
			variant={'outlined'}
			className={classes.root}>
			Connect with Chimera-X
		</Button>
	);
};
export default ChimeraX;
