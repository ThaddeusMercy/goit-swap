import React, {useEffect } from 'react';
import styled from 'styled-components'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { AbstractConnector } from '@web3-react/abstract-connector'
import usePrevious from '../../hooks/usePrevious'
import { ModalType, useToggleWalletModal, useModalOpen } from '../../state/modal'
import { setupNetwork } from '../../utils/wallet'
import { SUPPORTED_WALLETS } from '../../constants'
import Modal from '../Modal'

export default function WalletModal() {

    const { active, account, activate } = useWeb3React()

    const previousAccount = usePrevious(account)

    const walletModalOpen = useModalOpen(ModalType.WALLET)
    const toggleWalletModal = useToggleWalletModal()

    // close modal on connection, when logout before
    useEffect(() => {
        if (account && !previousAccount) {
            toggleWalletModal()
        }
    }, [account, previousAccount, toggleWalletModal])

    const tryConnection = async (connector: AbstractConnector | undefined) => {
        // If connector is walletconnect, and already tried a connection, manually reset it
        if (connector instanceof WalletConnectConnector && connector.walletConnectProvider?.wc?.uri) {
            connector.walletConnectProvider = undefined
        }

        if (connector) {
            activate(connector, undefined, true).catch(error => {
                if (error instanceof UnsupportedChainIdError) {
                    // retry connection after asking metamask to switch to BSC
                    if (setupNetwork()) {
                        activate(connector)
                    }
                }
            })
        }
    }

    function getWalletOptions() {
        return Object.keys(SUPPORTED_WALLETS).map(key => {
            const walletOption = SUPPORTED_WALLETS[key]

            return (
                <button key={`connect-${key}`} onClick={() => (tryConnection(walletOption.connector))} >walletOption.name</button>
            )
        })
    }

    return (
        <Modal isOpen={walletModalOpen} onDismiss={toggleWalletModal} >
            {getWalletOptions()}
        </Modal>
    )
}
