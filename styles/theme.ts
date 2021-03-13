import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string;
            text: string;
            primary: string;
        };
    }
}

const theme: DefaultTheme = {
    colors: {
        background: '#333644',
        text: '#E5E5E5',
        primary: '#8257e6'
    }
}

export default theme