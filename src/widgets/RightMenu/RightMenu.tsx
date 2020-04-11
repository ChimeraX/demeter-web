import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import RightMenuButton, { RightMenuButtonProperties } from './RightMenuButton';
import RightMenuButtonItem from './RightMenuButtonItem';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    }),
);

export interface RightMenuProperties {
    buttons: RightMenuButtonProperties[];
}

const RightMenu: React.FC<RightMenuProperties> = (properties) => {
    const classes = useStyles();

    const { buttons } = properties;

    const [anchor, setAnchor] = useState<(EventTarget & HTMLElement) | null>(null);

    const isMenuOpen = Boolean(anchor);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchor(null);
    };

    const renderMenu = (
        <Menu anchorEl={anchor} keepMounted open={isMenuOpen} onClose={handleMenuClose}>
            {buttons.map((button) => (
                <RightMenuButtonItem {...button} />
            ))}
        </Menu>
    );

    const renderDesktopSection = (
        <div className={classes.sectionDesktop}>
            {buttons.map((button) => (
                <RightMenuButton {...button} />
            ))}
        </div>
    );

    const renderMobileSection = (
        <div className={classes.sectionMobile}>
            <IconButton aria-label="show more" aria-haspopup="true" onClick={handleMenuOpen} color="inherit">
                <Icon>more_vert</Icon>
            </IconButton>
        </div>
    );

    return (
        <React.Fragment>
            {renderDesktopSection}
            {renderMobileSection}
            {renderMenu}
        </React.Fragment>
    );
};
export default RightMenu;
