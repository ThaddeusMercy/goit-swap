import React from "react";
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import '../assets/css/font.css';
import useEagerConnect from '../hooks/useEagerConnect'

import Swap from './Swap'
import Chart from './Chart'
import { RedirectPathToSwapOnly } from './Swap/redirects'

const AppWrapper = styled.div`
    display: flex
`;

function App() {

    // try to eagerly connect to an injected provider, if it exists and has granted access already
    useEagerConnect()

    return (
        <>
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
