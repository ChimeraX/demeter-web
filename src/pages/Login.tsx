import React, { useEffect, useState } from 'react';
import {
	Avatar,
	Button,
	Checkbox, createStyles, Divider,
	FormControlLabel,
	Grid,
	Link,
	Paper,
	TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import DemeterXTheme from '../theming/DemeterXTheme';
import FlexGrow from '@chimerax/common-web/lib/widgets/FlexGrow';

const useStyles = makeStyles((theme: DemeterXTheme) => createStyles({
	container: {
		height: '100vh',
	},
	imageContainer: {
		overflow: 'hidden',
		position: 'relative',
		display: 'inline-block',
	},
	image: {
		width: '100%',
		height: '100%',
		backgroundColor: 'black',
		backgroundImage: 'url(\'https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200\')',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'inherit',
		backgroundPosition: 'center',
		animation: '$image infinite 10s ease',
		'&::before': {
			display: 'block',
		},
	},
	paper: {
		padding: '128px 64px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: 0,
	},
	avatar: {
		margin: '8px',
	},
	form: {
		width: '100%',
		marginTop: '8px',
	},
	submit: {
		margin: '24px 0 16px',
	},
	icon: {
		backgroundColor: theme.palette.primary.main,
	},
	'@keyframes image': {
		'0%': {},
		'50%': { transform: 'scale(1.1)' },
		'100%': {},
	},
}));

export interface LoginError {
	cause: 'username' | 'password' | 'server';
	message: string;
}

export interface LoginProperties {
	error?: LoginError;
	labels: {
		username: string;
		password: string;
		rememberMe: string;
		forgotPassword: string;
		register: string;
		signIn: string;
	};
	onSubmit: (username: string, password: string, remember: boolean) => void;
}

const Login: React.FC<LoginProperties> = (properties: LoginProperties) => {
	const classes = useStyles();

	const { onSubmit, labels } = properties;

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);
	const [error, setError] = useState(properties.error);

	useEffect(() => {
		setError(properties.error);
	}, [properties.error]);

	const handleChangeUsername = (event: any) => {
		setUsername(event.target.value);
		setError(undefined);
	};

	const handleChangePassword = (event: any) => {
		setPassword(event.target.value);
		setError(undefined);
	};

	const toggleRemember = () => {
		setRemember(!remember);
	};

	const handleSubmit = () => {
		onSubmit(username, password, remember);
	};

	return (
		<Grid container className={classes.container}>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} className={classes.paper}>
				<Avatar className={classes.icon}/>
				<form className={classes.form}>
					<TextField
						onChange={handleChangeUsername}
						label={labels.username}
						variant={'outlined'}
						margin={'normal'}
						required
						error={error?.cause === 'username'}
						helperText={error?.cause === 'username' ? error.message : undefined}
						fullWidth/>
					<TextField
						onChange={handleChangePassword}
						label={labels.password}
						variant={'outlined'}
						margin={'normal'}
						required
						error={error?.cause === 'password'}
						helperText={error?.cause === 'password' ? error.message : undefined}
						fullWidth
					/>
					<FormControlLabel
						control={<Checkbox value='remember' color='primary'/>}
						label={labels.rememberMe}
						onClick={toggleRemember}
					/>
					<Button
						onClick={handleSubmit}
						fullWidth
						variant='contained'
						color='secondary'
						className={classes.submit}>
						{labels.signIn}
					</Button>
				</form>
				<Divider flexItem/>
				<FlexGrow/>
				<Grid container style={{ backgroundColor: 'transparent' }} spacing={5}>
					<Grid item xs>
						<Link component={RouterLink} to={'/recover'} underline={'none'}>
							{labels.forgotPassword}
						</Link>
					</Grid>
					<Grid item>
						<Link component={RouterLink} to={'/register'} underline={'none'}>
							{labels.register}
						</Link>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={false} sm={4} md={7} className={classes.imageContainer}>
				<div className={classes.image}/>
			</Grid>
		</Grid>
	);

};

export default Login;
