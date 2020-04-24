import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider, Icon, Paper } from '@material-ui/core';
import User from '../model/User';
import DemeterXTheme from '../theming/DemeterXTheme';

const useStyles = makeStyles((theme: DemeterXTheme) => {
	const glowSize = 2;
	const boxShadow = (x: number, y: number, color: string) => {
		return `${color} ${x}px ${y}px 1px 1px`;
	};
	const boxShadows = (x: number, y: number) => {
		const shadows = [
			boxShadow(x, y, theme.palette.secondary.light),
			boxShadow(-x, y, theme.palette.primary.dark),
			boxShadow(-x, -y, theme.palette.primary.dark),
			boxShadow(x, -y, theme.palette.secondary.light),
		];
		return shadows.join(', ');
	};
	return createStyles({
		root: {},
		paper: {
			backgroundColor: theme.palette.primary.dark,
			backgroundImage: theme.gradientImage,
			padding: '0px 20px 10px',
			borderRadius: '20px',
		},
		user: {
			textAlign: 'center',
			padding: '10px',
			'&:focus': {
				outline: 'none',
			},
		},
		text: {
			userSelect: 'none',
			textShadow: 'black 0px 0px 2px',
		},
		username: {
			fontSize: '24px',
		},
		email: {
			fontSize: '12px',
		},
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
		profilePicture: {
			height: '160px',
			width: '160px',
			margin: '24px 24px 10px',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			borderRadius: '50%',
			animation: '$glow 3s infinite linear',
		},
		menu: {
			margin: '10px',
		},
		button: {
			background: 'transparent',
			margin: '12px 24px 12px',
			borderRadius: '30px',
			border: 'white solid 1px',
			'&:hover': {
				background: 'transparent',
			},
		},
		logoutButton: {},
		icon: {
			minWidth: '40px',
		},
		logoutIcon: {
			color: 'red'
		},
		divider: {
			backgroundColor: 'white',
		},
		'@keyframes glow': {
			'0%': { boxShadow: boxShadows(glowSize, glowSize) },
			'25%': { boxShadow: boxShadows(glowSize, -glowSize) },
			'50%': { boxShadow: boxShadows(-glowSize, -glowSize) },
			'75%': { boxShadow: boxShadows(-glowSize, glowSize) },
			'100%': { boxShadow: boxShadows(glowSize, glowSize) },
		},
	});
});

export interface UserWidgetProperties {
	user: User;
}

const UserWidget: React.FC<UserWidgetProperties> = (properties) => {
	const { user } = properties;

	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const userFullName = `${user.firstName} ${user.lastName}`;

	return (
		<div>
			<Paper
				className={classes.profileIcon}
				style={{ backgroundImage: `url('${user.profilePicture}')` }}
				aria-controls="customized-menu"
				aria-haspopup="true"
				color="primary"
				onClick={handleClick}
			/>
			<Menu
				id="customized-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				className={classes.menu}
				classes={{ paper: classes.paper }}
				elevation={0}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<div className={classes.user}>
					<img
						src={user.profilePicture}
						alt={userFullName}
						unselectable={'on'}
						draggable={false}
						className={classes.profilePicture}/>
					<div className={clsx(classes.username, classes.text)}>{userFullName}</div>
					<div className={clsx(classes.email, classes.text)}>{user.email}</div>
				</div>
				<Divider classes={{ root: classes.divider }}/>
				<MenuItem key={'preferences'} className={classes.button}>
					<ListItemIcon className={classes.icon}>
						<Icon>tune</Icon>
					</ListItemIcon>
					<ListItemText primary="Preferences"/>
				</MenuItem>
				<MenuItem key={'settings'} className={classes.button}>
					<ListItemIcon className={classes.icon}>
						<Icon>settings</Icon>
					</ListItemIcon>
					<ListItemText primary="Settings"/>
				</MenuItem>
				<MenuItem key={'logout'} className={clsx(classes.button, classes.logoutButton)}>
					<ListItemIcon className={clsx(classes.logoutIcon, classes.icon)}>
						<Icon>power_settings_new</Icon>
					</ListItemIcon>
					<ListItemText primary="Log out"/>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default UserWidget;

