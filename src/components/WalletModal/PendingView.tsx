import styled, { keyframes } from 'styled-components'
import { AbstractConnector } from '@web3-react/abstract-connector'
import Row, { RowCenter } from '../Row'
import { ReactComponent as LoaderIcon } from '../../assets/loader.svg'
import { ButtonGray } from '../Button'
import { SUPPORTED_WALLETS } from '../../constants'

// Error
const ErrorWrapper = styled(RowCenter)`
    justify-content: flex-start;
    margin: 0 30px 20px 30px;
    background-color: ${({theme}) => theme.bg1};
    height: 70px;
    border-radius: 10px;

    & > p {
        color: ${({theme}) => theme.error};
        font-weight: 600;
        margin: 0 0 0 20px;
    }
`

const ErrorMark = styled.div`
    background-color: ${({theme}) => theme.error};
    height: 100%;
    width: 20px;
    border-radius: 10px 0 0 10px;
`

const TryAgainButton = styled(ButtonGray)`
    height: 30px;
    padding: 0 15px 0 15px;
    margin: 0 20px 0 auto;
`

// Loading
const spinningAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const LoadingWrapper = styled(RowCenter)`
    justify-content: center;
    color: ${({theme}) => theme.text1};
    margin-bottom: 30px;

    & > * {
        margin: 0 5px;
    }
`

const StyledLoaderIcon = styled(LoaderIcon)`
    width: 16px;
    height: 16px;
    animation: ${spinningAnimation} 2s linear infinite;
`

// Connector
const ConnectorWrapper = styled.div`
    margin: -10px 0 30px 0;

    & h2 {
        text-align: center;
        margin: 10px 0 0 0;
    }
`

const ConnectorIconWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 64px;
    width: 64px;
`

const ConnectorIcon = styled.img`
    width: 100%;
    height: 100%;
`

interface PendingViewProps {
    pendingError: boolean,
    setPendingError: (error: boolean) => void,
    pendingConnector: AbstractConnector,
    tryConnection: (connector: AbstractConnector) => void
}

export default function PendingView({
    pendingError,
    setPendingError,
    pendingConnector,
    tryConnection
}: PendingViewProps) {

    return (
        <>
            {Object.keys(SUPPORTED_WALLETS).map((key) => {
                const walletOption = SUPPORTED_WALLETS[key]

                console.log(walletOption)
                if (walletOption.connector == pendingConnector) {
                    return (
                        <ConnectorWrapper>
                            <ConnectorIconWrapper key={key} >
                                <ConnectorIcon src={require('../../assets/icons/' + walletOption.iconName).default} alt={walletOption.iconName} />
                            </ConnectorIconWrapper>
                            <h2>{walletOption.name}</h2>
                        </ConnectorWrapper>
                    )
                }
            })}
            {pendingError ? (
                <ErrorWrapper>
                    <ErrorMark />
                    <p>An error has occured</p>
                    <TryAgainButton onClick={() => {
                        setPendingError(false)
                        tryConnection(pendingConnector)
                    }}>Try Again</TryAgainButton>
                </ErrorWrapper>
            ) : (
                <LoadingWrapper>
                    <StyledLoaderIcon />
                    <p>Initializing...</p>
                </LoadingWrapper>
            )}
        </>
    )
}
