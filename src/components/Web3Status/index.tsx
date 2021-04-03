import React from 'react';
import styled from 'styled-components'
import { darken, opacify } from 'polished'
import { useWeb3React } from '@web3-react/core'
import { useToggleWalletModal } from '../../state/modal'
import { ButtonPrimary, ButtonSecondary } from '../Button'
import { shortenAddress } from '../../utils/address'
import WalletModal from '../WalletModal'

const Web3ButtonConnect = styled(ButtonSecondary)`
    height: 35px;
    padding: 0 35px;
    background-color: ${({theme}) => theme.primary4};

    :hover, :focus {
        border-color: ${({theme}) => opacify(0.3, theme.primary4)};
    }

    :focus {
        box-shadow: 0 0 0 1px ${({theme}) => theme.primary4};
    }
`

export default function Web3Status() {
    const { account } = useWeb3React()
    const shortAddress = shortenAddress(account)
    const toggleWalletModal = useToggleWalletModal()

    if (!account) {
        return (
            <>
                <Web3ButtonConnect onClick={toggleWalletModal} >Connect Wallet</Web3ButtonConnect>
                <WalletModal />
            </>
        )
    } else {
        return (
            <p style={{color: "white"}} >{shortAddress}</p>
        )
    }
}
