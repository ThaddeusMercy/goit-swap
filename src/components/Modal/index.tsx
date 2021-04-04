import React from 'react';
import styled from 'styled-components'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

const StyledDialogOverlay = styled(DialogOverlay)`
    &[data-reach-dialog-overlay] {
        z-index: 2;
        background-color: ${({theme}) => theme.modalBg};
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const StyledDialogContent = styled(DialogContent).attrs({
    'aria-label': 'dialog'
})`
    overflow: hidden;

    &[data-reach-dialog-content] {
        width: 50vw;
        max-width: 420px;
        background-color: ${({theme}) => theme.bg2};
        align-self: center;
        border-radius: 20px;
        padding: 0;
    }
`

interface ModalProps {
    isOpen: boolean,
    onDismiss: () => void,
    children?: React.ReactNode,
}

export default function Modal({
    isOpen,
    onDismiss,
    children
}: ModalProps) {

    return (
        <>
            <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismiss} >
                <StyledDialogContent aria-label="dialog content" >
                    {children}
                </StyledDialogContent>
            </StyledDialogOverlay>
        </>
    );
}

export { default as ModalHeader } from './ModalHeader'
