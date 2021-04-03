import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core'
import { ModalProvider } from './state/modal'
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import getLibrary from './utils/getLibrary'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'

ReactDOM.render(
    <React.StrictMode>
        <FixedGlobalStyle />
        <Web3ReactProvider getLibrary={ getLibrary} >
            <ModalProvider>
                <ThemeProvider>
                    <ThemedGlobalStyle />
                    <HashRouter>
                        <App />
                    </HashRouter>
                </ThemeProvider>
            </ModalProvider>
        </Web3ReactProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
