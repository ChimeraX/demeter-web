import React from 'react';
import PageTitle from '../widgets/PageTitle';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DemeterXTheme from '../theming/DemeterXTheme';

const useStyles = makeStyles((theme: DemeterXTheme) => {
		return createStyles({
			root: {
				minHeight: window.innerHeight,
			},
		});
	},
);

export interface PageProperties {
	title: string;
}


const Page: React.FC<PageProperties> = (properties) => {
	// properties
	const { title, children } = properties;

	// classes
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<PageTitle title={title}/>
			{children}
		</section>
	);
};

export default Page;
