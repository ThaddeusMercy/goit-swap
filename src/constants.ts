import { AbstractConnector } from '@web3-react/abstract-connector';
import { injected, walletconnectConnector, bscConnector } from './connectors'

export interface WalletInfo {
    connector?: AbstractConnector
    name: string
    iconName: string
}

export const SUPPORTED_WALLETS = {
    METAMASK: {
        connector: injected,
        name: "Metamask",
        iconName: "metamask.svg"
    },
    WALLETCONNECT: {
        connector: walletconnectConnector,
        name: "Wallet Connect",
        iconName: "walletconnect.svg"
    },
    BSC_CONNECTOR: {
        connector: bscConnector,
        name: "Binance Chain Wallet",
        iconName: "bsc.svg"
    }
}
