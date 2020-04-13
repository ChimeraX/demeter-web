import {
    CYAN_PURPLE,
    cyanPurpleTheme as cyanPurpleThemeCommon,
    GREEN_ORANGE,
    greenOrangeTheme as greenOrangeThemeCommon,
    RED_ORANGE,
    redOrangeTheme as redOrangeThemeCommon,
} from '@chimerax/common-app/lib/theming/themes';
import DemeterXTheme from './DemeterXTheme';

export const cyanPurpleTheme: DemeterXTheme = {
    ...cyanPurpleThemeCommon,
    images: {
        toolbar: './images/white_background.jpg',
        drawer: './images/white_background.jpg',
        background: './images/white_background.jpg',
    },
};

export const greenOrangeTheme: DemeterXTheme = {
    ...greenOrangeThemeCommon,
    images: {
        toolbar: './images/white_background.jpg',
        drawer: './images/white_background.jpg',
        background: './images/dark_background.jpg',
    },
};

export const redOrangeTheme: DemeterXTheme = {
    ...redOrangeThemeCommon,
    images: {
        toolbar: './images/white_background.jpg',
        drawer: './images/white_background.jpg',
        background: './images/white_background.jpg',
    },
};

const themes: { [key: string]: DemeterXTheme } = {
    [GREEN_ORANGE]: greenOrangeTheme,
    [RED_ORANGE]: redOrangeTheme,
    [CYAN_PURPLE]: cyanPurpleTheme,
};

export default themes;
