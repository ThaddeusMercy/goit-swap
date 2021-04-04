import React from 'react'
import styled from 'styled-components'
import { transparentize, darken } from 'polished'
import Row from '../Row'
import { ReactComponent as CloseIcon } from '../../assets/close.svg'

const ModalHeaderWrapper = styled(Row)`
    width: auto;
    justify-content: space-between;
    margin: 20px 20px 30px 20px;
`

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

const ModalTitle = styled.h2`
    color: ${({theme}) => theme.white};
    margin: 0;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px
`

function CloseButton({onDismiss}: {onDismiss: () => void}) {
    return (
        <CloseButtonWrapper onClick={onDismiss} >
            <StyledCloseIcon />
        </CloseButtonWrapper>
    )
}

export default function ModalHeader({onDismiss}: {onDismiss: () => void}) {
    return (
        <ModalHeaderWrapper>
            <ModalTitle>Connect Wallet</ModalTitle>
            <CloseButton onDismiss={onDismiss} />
        </ModalHeaderWrapper>
    )
}
