import { AbstractConnector } from '@web3-react/abstract-connector';
import { injected, walletconnectConnector, bscConnector } from './connectors'

export const COLORS = {
    primary: "rgb(238, 70, 71)" ,
    primaryAlpha30: "rgba(238, 70, 71, 0.3)",
    text: "white",
    background1: "rgb(21, 23, 28)",
    background2: "rgb(30, 33, 38)"
};

export interface WalletInfo {
    connector?: AbstractConnector
    name: string
    iconName: string
}

export const SUPPORTED_WALLETS = {
    METAMASK: {
        connector: injected,
        name: "Metamask",
        iconName: "metmask.svg"
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
