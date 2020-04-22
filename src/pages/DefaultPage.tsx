import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			height: '100%'
		}
	});
});

const DefaultPage = () => {
	const classes = useStyles();
    return <div className={classes.root}>DefaultPage</div>;
};

export default DefaultPage;
