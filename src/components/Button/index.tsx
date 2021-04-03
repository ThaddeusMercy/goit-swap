// import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished'

const Base = styled.button<{
    borderRadius?: string
}>`
    outline: none;
    text-align: center;
    border-radius: 5px;
    border-radius: ${({borderRadius}) => borderRadius && borderRadius};
    border: 1px solid transparent;
    text-decoration: none;
    color: white;
    cursor: pointer;

    &.disabled {
        cursor: auto;
    }
`

export const ButtonPrimary = styled(Base)`
    background-color: ${({theme}) => theme.primary1};
    color: ${({theme}) => theme.white}
    border-style: solid;
    border-width: 1px;

    &:hover {
        background-color: ${({theme}) => darken(0.05, theme.primary1)}
    }
`
