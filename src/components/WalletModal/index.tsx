import React, {useEffect } from 'react';
import styled from 'styled-components'
import { lighten } from 'polished'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { AbstractConnector } from '@web3-react/abstract-connector'
import usePrevious from '../../hooks/usePrevious'
import { ModalType, useToggleWalletModal, useModalOpen } from '../../state/modal'
import { setupNetwork } from '../../utils/wallet'
import { SUPPORTED_WALLETS } from '../../constants'
import Modal, { ModalHeader } from '../Modal'
import { ButtonSecondary } from '../Button'
import Column from '../Column'

const ConnectorsWrapper = styled(Column)`
    padding: 0 30px 30px 30px;
`

const ConnectorButton = styled(ButtonSecondary)`
    min-width: 100%;
    padding: 0;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: transparent;
    border: 1px solid ${({theme}) => lighten(0.1, theme.bg2)};
    margin: 0 0 20px 0;
    width: fit-content;
    align-items: center;

    &:last-child {
        margin-bottom: 0;
    }

    & > p {
        margin: 0 0 0 20px;
        color: ${({theme}) => theme.text1 };
    }

    & > img {
        margin: 0 20px 0 0;
        max-width: 32px;
        max-height: 32px;
    }
`

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
                <ConnectorButton key={`connect-${key}`} onClick={() => (tryConnection(walletOption.connector))} >
                    <p>{walletOption.name}</p>
                    <img src={require('../../assets/icons/' + walletOption.iconName).default} alt={walletOption.iconName} />
                </ConnectorButton>
            )
        })
    }

    function getWalletModalContent() {
        return (
            <>
                <ModalHeader onDismiss={toggleWalletModal} />
                <ConnectorsWrapper>
                    {getWalletOptions()}
                </ConnectorsWrapper>
            </>
        )
    }

    return (
        <Modal isOpen={walletModalOpen} onDismiss={toggleWalletModal} >
            {getWalletModalContent()}
        </Modal>
    )
}
