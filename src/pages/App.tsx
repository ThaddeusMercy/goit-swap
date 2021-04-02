import React from "react";
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import '../assets/css/font.css';
import { COLORS } from '../constants';

import Swap from './Swap'
import Chart from './Chart'
import { RedirectPathToSwapOnly } from './Swap/redirects'

const AppWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: var(--color-background1);
    background-image: radial-gradient(rgba(238, 70, 71, 0.1) 30%, rgba(33, 36, 41, 0));
`;

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: ${ COLORS.primary};
        --color-primary-alpha30: ${ COLORS.primaryAlpha30};
        --color-text: ${ COLORS.text};
        --color-background1: ${ COLORS.background1};
        --color-background2: ${ COLORS.background2};
    }
`;

function App() {

    return (
        <>
            <GlobalStyle/>
            <AppWrapper>
                <Header />
                <Switch>
                    <Route exact strict path="/swap" component={Swap} />
                    <Route exact strict path="/chart" component={Chart} />
                    <Route component={RedirectPathToSwapOnly} />
                </Switch>
            </AppWrapper>
        </>
    );
}

export default App;
