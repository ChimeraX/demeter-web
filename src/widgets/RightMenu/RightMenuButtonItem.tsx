import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import RightMenuButton, { RightMenuButtonProperties } from './RightMenuButton';

export interface RightMenuButtonItemProperties extends RightMenuButtonProperties {}

const RightMenuButtonItem: React.FC<RightMenuButtonItemProperties> = (properties) => {
    const { onClick, icon } = properties;
    return (
        <MenuItem onClick={onClick}>
            <RightMenuButton icon={icon} />
        </MenuItem>
    );
};

export default RightMenuButtonItem;
