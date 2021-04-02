import React from 'react';
import styled from 'styled-components'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

const StyledDialogOverlay = styled(DialogOverlay)`
    &[data-reach-dialog-overlay] {
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.3);
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
        height: 100px;
        background-color: var(--color-background2);
        align-self: center;
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
                    { children}
                </StyledDialogContent>
            </StyledDialogOverlay>
        </>
    );
}
