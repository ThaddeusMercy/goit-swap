import React, { useMemo } from "react";
import {
    DefaultTheme,
    ThemeProvider as StyledThemeProvider,
    createGlobalStyle,
    css
} from 'styled-components';
import { transparentize } from 'polished'
import { rgba } from 'polished'
import { Colors } from './styled'

export function colors(darkMode: boolean): Colors {
    return {
        white: '#ffffff',
        black: '#000000',

        modalBg: 'rgba(0, 0, 0, 0.3)',

        primary1: '#EE4647',
        primary2: '#F2555D',
        primary3: '#F46473',
        primary4: transparentize(0.7, "#EE4647"),

        bg1: '#15171C',
        bg2: '#1E2126',

        primaryText1: '#EE4647',

        text1: '#ffffff',
        text2: '#D8CACB',

        error: '#a61d23'
    }
}

export function theme(darkMode: boolean) {
    return {
        ...colors(darkMode)
    }
}

export default function ThemeProvider({children}: {children: React.ReactNode}) {
    const darkMode = false
    const themeObject = useMemo(() => theme(darkMode), [darkMode])

    return (
        <StyledThemeProvider theme={themeObject} >
            {children}
        </StyledThemeProvider>
    )
}

export const FixedGlobalStyle = createGlobalStyle`
    html {
        font-family: 'Lato', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    * {

    }
`

export const ThemedGlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;
        background-color: ${({theme}) => theme.bg1};
        background-image: ${({theme}) =>
            `radial-gradient(${transparentize(0.9, theme.primary1)} 30%, ${transparentize(1, theme.bg1)})`
        };
    }

    h1 {
        color: ${({theme}) => theme.primaryText1};
    }

    h2, h3, h4, h5, h6 {
        color: ${({theme}) => theme.text1};
    }

    h2 {
        font-size: 2rem;
    }
`
