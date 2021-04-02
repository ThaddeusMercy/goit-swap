import React, { useContext, useState } from 'react'
import { ModalType } from './types'

const ModalActionsContext = React.createContext<(ModalType?) => void>(() => {})
const ModalStateContext = React.createContext<ModalType | null>(null)

export const useModalActionsContext = () => useContext(ModalActionsContext)

export const useModalStateContext = () => useContext(ModalStateContext)

export default function ModalProvider({ children }: { children: any }) {
    const [modal, setModal] = useState<ModalType | null>(null)

    return (
        <ModalStateContext.Provider value={ modal} >
            <ModalActionsContext.Provider value={ setModal} >
                { children}
            </ModalActionsContext.Provider>
        </ModalStateContext.Provider>
    )
}
