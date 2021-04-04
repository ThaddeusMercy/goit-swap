import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { lighten } from 'polished'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
    UnsupportedChainIdError,
    useWeb3React
} from '@web3-react/core'
import { NoEthereumProviderError } from '@web3-react/injected-connector'
import { AbstractConnector } from '@web3-react/abstract-connector'
import usePrevious from '../../hooks/usePrevious'
import { ModalType, useToggleWalletModal, useModalOpen } from '../../state/modal'
import { setupNetwork } from '../../utils/wallet'
import { SUPPORTED_WALLETS } from '../../constants'
import Modal, { ModalTitleHeader, ModalNavigationHeader } from '../Modal'
import { ButtonSecondary } from '../Button'
import Column from '../Column'
import PendingView from './PendingView'

const ConnectorsWrapper = styled(Column)`
    padding: 0 30px 30px 30px;
`

const ConnectorButton = styled(ButtonSecondary)`
    min-width: 100%;
    padding: 0;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: transparent;
    border: 1px solid ${({theme}) => lighten(0.1, theme.bg2)};
    margin: 0 0 20px 0;
    width: fit-content;
    align-items: center;
    font-size: 20px;

    &:last-child {
        margin-bottom: 0;
    }

    & > p {
        font-family: 'Lato', sans-serif;
        margin: 0 0 0 20px;
        color: ${({theme}) => theme.text1 };
    }

    & > img {
        margin: 0 20px 0 0;
        max-width: 32px;
        max-height: 32px;
    }
`

enum WalletView {
    CONNECTORS,
    PENDING
}

export default function WalletModal() {

    const { active, account, activate } = useWeb3React()

    const previousAccount = usePrevious(account)

    const [walletView, setWalletView] = useState(WalletView.CONNECTORS)
    const [pendingError, setPendingError] = useState<boolean>()
    const [pendingConnector, setPendingConnector] = useState<AbstractConnector>()

    const walletModalOpen = useModalOpen(ModalType.WALLET)
    const toggleWalletModal = useToggleWalletModal()

    // close modal on connection, when logout before
    useEffect(() => {
        if (account && !previousAccount) {
            toggleWalletModal()
        }
    }, [account, previousAccount, toggleWalletModal])

    useEffect(() => {
        if (walletModalOpen) {
            setWalletView(WalletView.CONNECTORS)
            setPendingError(false)
        }
    }, [walletModalOpen])

    const tryConnection = async (connector: AbstractConnector | undefined) => {
        setWalletView(WalletView.PENDING)
        setPendingConnector(connector)

        // If connector is walletconnect, and already tried a connection, manually reset it
        if (connector instanceof WalletConnectConnector && connector.walletConnectProvider?.wc?.uri) {
            connector.walletConnectProvider = undefined
        }

        if (connector) {
            activate(connector, async (error: Error) => {
                if (error instanceof UnsupportedChainIdError) {
                    // retry connection after asking metamask to switch to BSC
                    if (await setupNetwork()) {
                        activate(connector)
                    } else {
                        setPendingError(true)
                    }
                } else {
                    setPendingError(true)
                }
            })
        }
    }

    function getWalletOptions() {
        return Object.keys(SUPPORTED_WALLETS).map(key => {
            const walletOption = SUPPORTED_WALLETS[key]

            return (
                <ConnectorButton
                    key={`connect-${key}`}
                    onClick={() => {
                        tryConnection(walletOption.connector)
                    }}
                >
                    <p>{walletOption.name}</p>
                    <img src={require('../../assets/icons/' + walletOption.iconName).default} alt={walletOption.iconName} />
                </ConnectorButton>
            )
        })
    }

    function getWalletModalContent() {
        switch (walletView) {
            case WalletView.CONNECTORS:
            return (
                <>
                    <ModalTitleHeader title={"Connect Wallet"} onDismiss={toggleWalletModal} />
                    <ConnectorsWrapper>
                        {getWalletOptions()}
                    </ConnectorsWrapper>
                </>
            )

            case WalletView.PENDING:
            return (
                <>
                    <ModalNavigationHeader
                        onBack={() => {
                            setWalletView(WalletView.CONNECTORS)
                            setPendingError(false)
                        }}
                        onDismiss={toggleWalletModal}
                    />
                    <PendingView
                        pendingError={pendingError}
                        setPendingError={setPendingError}
                        pendingConnector={pendingConnector}
                        tryConnection={tryConnection}
                    />
                </>
            )
        }
    }

    return (
        <Modal isOpen={walletModalOpen} onDismiss={toggleWalletModal} >
            {getWalletModalContent()}
        </Modal>
    )
}
