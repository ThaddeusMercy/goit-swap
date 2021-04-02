import React from 'react';
import { useWeb3React } from '@web3-react/core'
import { useToggleWalletModal } from '../../state/modal'
import { ButtonPrimary } from '../Button'
import { shortenAddress } from '../../utils/address'
import WalletModal from '../WalletModal'

export default function Web3Status() {
    const { account } = useWeb3React()
    const shortAddress = shortenAddress(account)
    const toggleWalletModal = useToggleWalletModal()

    if (!account) {
        return (
            <>
                <ButtonPrimary onClick={toggleWalletModal} >Connect Wallet</ButtonPrimary>
                <WalletModal />
            </>
        )
    } else {
        return (
            <p>{shortAddress}</p>
        )
    }
}
