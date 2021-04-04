import { FlattenSimpleInterpolation } from 'styled-components'

export interface Colors {
    white: string,
    black: string,

    modalBg: string,

    primary1: string,
    primary2: string,
    primary3: string,
    primary4: string,

    bg1: string,
    bg2: string,

    primaryText1: string,

    text1: string,
    text2: string,

    error: string
}

declare module 'styled-components' {
    export interface DefaultTheme extends Colors {
    }
}
