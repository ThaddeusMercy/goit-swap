import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import getRpcUrl from '../utils/getRpcUrl'

const walletconnectBridgeUrl = process.env.REACT_APP_WALLETCONNECT_BRIDGE_URL
const chainId: number = parseInt(process.env.REACT_APP_CHAIN_ID)
const rpcUrl = getRpcUrl()

export const injected = new InjectedConnector({
  supportedChainIds: [chainId]
})

export const bscConnector = new BscConnector({
    supportedChainIds: [chainId]
})

export const walletconnectConnector = new WalletConnectConnector({
    rpc: {[chainId]: rpcUrl},
    bridge: walletconnectBridgeUrl,
    qrcode: true,
    pollingInterval: 12000
})
