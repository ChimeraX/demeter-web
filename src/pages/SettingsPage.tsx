import React from 'react';
import { ThemePickerItem } from '@chimerax/common-app/lib/widgets/ThemePicker';
import { cyanPurpleTheme, greenOrangeTheme, redOrangeTheme } from '../theming/themes';
import ThemePickerComponent from '@chimerax/common-app/lib/components/ThemePicker';

const items: ThemePickerItem[] = [
    {
        theme: greenOrangeTheme,
        displayName: 'Salad',
        iconActive: 'favorite_outline',
        iconInactive: 'favorite',
    },
    {
        theme: redOrangeTheme,
        displayName: 'Pasta',
        iconActive: 'favorite',
        iconInactive: 'favorite',
    },
    {
        theme: cyanPurpleTheme,
        displayName: 'Stars',
        iconActive: 'favorite',
        iconInactive: 'favorite',
    },
];

const ThemePicker = () => <ThemePickerComponent items={items} />;

const SettingsPage = () => {
    return <ThemePicker />;
};

export default SettingsPage;
