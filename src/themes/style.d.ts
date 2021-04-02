import { FlattenSimpleInterpolation } from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {

        // css snippets
        flexRowNoWrap: FlattenSimpleInterpolation,
        flexColumnNoWrap: FlattenSimpleInterpolation
    }
}
