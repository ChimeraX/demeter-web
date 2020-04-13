import ChimeraXTheme from '@chimerax/common-app/lib/theming/ChimeraXTheme';

export default interface DemeterXTheme extends ChimeraXTheme {
    images: {
        toolbar: string;
        drawer: string;
        background: string;
    };
}
