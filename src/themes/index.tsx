import React from "react";
import {
    DefaultTheme,
    ThemeProvider,
    css
} from 'styled-components';

const theme: DefaultTheme = {

    // css snippets
    flexRowNoWrap: css`
        display: flex;
        flex-flow: column no-wrap;
    `,
    flexColumnNoWrap: css`
        display: flex;
        flex-flow: column no-wrap;
    `
}

export default function Theme({ children}: { children: React.ReactNode}) {
    return <ThemeProvider theme={ theme} >{ children}</ThemeProvider>
}
