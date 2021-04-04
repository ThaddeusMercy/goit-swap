// import React from 'react';
import styled from 'styled-components';
import { darken, transparentize, lighten } from 'polished'
import { ReactComponent as CloseIcon } from '../../assets/close.svg'
import { ReactComponent as BackIcon} from '../../assets/back.svg'

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
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    &.disabled {
        cursor: auto;
    }
`

export const ButtonPrimary = styled(Base)`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    background-color: ${({theme}) => theme.primary1};
    color: ${({theme}) => theme.white}

    &:hover {
        background-color: ${({theme}) => darken(0.05, theme.primary1)}
    }

    &:focus {
        box-shadow: 0 0 0 1px ${({theme}) => theme.primary2};
    }
`

export const ButtonSecondary = styled(Base)`
    border: 1px solid ${({theme}) => theme.primary4};
    color: ${({theme}) => theme.primaryText1};
    background-color: transparent;

    &:hover {
        border: 1px solid ${({theme}) => theme.primary2};
    }
`

export const ButtonGray = styled(Base)`
    background-color: ${({theme}) => theme.bg2};
    border: 1px solid ${({theme}) => lighten(0.1, theme.bg2)};
    color: ${({theme}) => theme.white};

    &:hover {
        background-color: ${({theme}) => darken(0.02, theme.bg2)};
        color: ${({theme}) => transparentize(0.1, theme.white)};
    }
`

// CloseButton
const CloseButtonWrapper = styled.button`
    border: none;
    outline: none;
    width: 24px;
    height: 24px;
    background-color: ${({theme}) => transparentize(0.9, theme.white)};
    border-radius: 50%;
    padding: 0;
    cursor: pointer;

    &:hover > * {
        opacity: 0.7;
    }
`

const StyledCloseIcon = styled(CloseIcon)`
    width: 12px;
    height: 12px;
    margin: 6px;
`

export function CloseButton({onClick}: {onClick: () => void}) {
    return (
        <CloseButtonWrapper onClick={onClick} >
            <StyledCloseIcon />
        </CloseButtonWrapper>
    )
}

//Back Button
const BackButtonWrapper = styled.button`
    padding: 0;
    outline: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: transparent;
    border: none;
    align-items: center;
    cursor: pointer;

    & > p {
        margin: 0 0 0 10px;
        color: ${({theme}) => theme.primaryText1};
        letter-spacing: 0.2px;
        font-weight: 600;
    }

    &:hover {
        opacity: 0.7;
    }
`

const StyledBackIcon = styled(BackIcon)`
    height: 16px;
`

export function BackButton({onClick}: {onClick: () => void}) {
    return (
        <BackButtonWrapper onClick={onClick} >
            <StyledBackIcon />
            <p>Back</p>
        </BackButtonWrapper>
    )
}
