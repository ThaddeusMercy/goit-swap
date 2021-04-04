import React from 'react'
import styled from 'styled-components'
import { transparentize, darken } from 'polished'
import Row from '../Row'
import { CloseButton, BackButton } from '../Button';

const ModalHeaderWrapper = styled(Row)`
    width: auto;
    justify-content: space-between;
    margin: 20px 20px 30px 20px;
`

const ModalTitle = styled.h2`
    color: ${({theme}) => theme.white};
    margin: 0;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 20px;
`

interface ModalTitleHeaderProps {
    title: string,
    onDismiss: () => void
}

export function ModalTitleHeader({
    title,
    onDismiss
}: ModalTitleHeaderProps) {
    return (
        <ModalHeaderWrapper>
            <ModalTitle>{title}</ModalTitle>
            <CloseButton onClick={onDismiss} />
        </ModalHeaderWrapper>
    )
}

interface ModalNavigationHeaderProps {
    onBack: () => void,
    onDismiss: () => void
}

export function ModalNavigationHeader({
    onBack,
    onDismiss
}: ModalNavigationHeaderProps) {
    return (
        <ModalHeaderWrapper>
            <BackButton onClick={onBack} />
            <CloseButton onClick={onDismiss} />
        </ModalHeaderWrapper>
    )
}
