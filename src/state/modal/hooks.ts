import { useCallback } from 'react'
import { ModalType } from './types'
import { useModalActionsContext, useModalStateContext } from './providers'

export function useModalOpen(modal: ModalType): boolean {
    const modalState = useModalStateContext()

    return modal === modalState
}

export function useOpenModal(modal: ModalType): () => void {
    const setOpenModal = useModalActionsContext()

    return useCallback(() => setOpenModal(modal), [modal, setOpenModal])
}

export function useCloseModals(): () => void {
    const setOpenModal = useModalActionsContext()

    return useCallback(() => setOpenModal(null), [setOpenModal])
}

function useToggleModal(modal: ModalType): () => void {
    let isOpen = useModalOpen(modal)
    let setOpenModal = useModalActionsContext()

    return useCallback(() => setOpenModal(isOpen ? null : modal), [setOpenModal, isOpen, modal])
}

export function useToggleWalletModal(): () => void {
    return useToggleModal(ModalType.WALLET)
}
