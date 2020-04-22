import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Paper } from '@material-ui/core';

// const image = 'https://cdn.stirimondene.fanatik.ro/wp-content/thumbnails/XFi-Dl4nJFmlkLvQ9izKyTq81n4=/664x374/smart/filters:contrast(5):quality(50):format(webp)/wp-content/uploads/2020/03/un-actor-celebru-castigator-la-globurile-de-aur-infectat-cu-coronavirus-reactia-din-aceasta-seara.jpg';
const image = 'https://ae01.alicdn.com/kf/HTB1SwWCcBKw3KVjSZFOq6yrDVXa4.jpg_q50.jpg';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			height: '100%',
		},
		profilePicture: {
			height: '48px',
			width: '48px',
			backgroundImage: `url('${image}')`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			border: `${theme.palette.secondary.light} solid 1px`,
			borderRadius: '24px',
			'&:hover': {
				boxShadow: `${theme.palette.secondary.dark} 0 0 0 3px`,
			},
		},
	});
});

const UserWidget = () => {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Paper
				className={classes.profilePicture}
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
			>
				<MenuItem key={'mail'}>
					<ListItemIcon>
						<SendIcon fontSize="small"/>
					</ListItemIcon>
					<ListItemText primary="Sent mail"/>
				</MenuItem>
				<MenuItem key={'drafts'}>
					<ListItemIcon>
						<DraftsIcon fontSize="small"/>
					</ListItemIcon>
					<ListItemText primary="Drafts"/>
				</MenuItem>
				<MenuItem key={'inbox'}>
					<ListItemIcon>
						<InboxIcon fontSize="small"/>
					</ListItemIcon>
					<ListItemText primary="Inbox"/>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default UserWidget;

