import React from "react";
import {NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as Logo } from '../../assets/minimal-logo.svg';
import {RowFixed } from '../Row';
import Web3Status from '../Web3Status'

const HeaderRow = styled(RowFixed)`
    width: 100%;
`;

const HeaderWrapper = styled.div`
    display: flex;
    border-bottom: 0.5px;
    border-bottom-style: solid;
    border-bottom-color: rgba(0, 0, 0, 0.3);
    height: 64px;
    width: 100%;
`;

const StyledLogo = styled(Logo)`
    height: 24px;
    align-self: center;
    margin-left: 20px;
    margin-right: 10px;
`;

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
    activeClassName
})`
    align-items: left;
    font-family: 'Inter' sans-serif;
    text-decoration: none;
    font-size: 1rem;
    color: var(--color-text);
    font-weight: 600;
    margin: 0 10px;
    opacity: 0.7;

    &.${activeClassName} {
        opacity: 1;
        color: var(--color-primary);
    }

    :hover {
        opacity: 0.9;
    }
`;

function Header() {

    return (
        <HeaderWrapper>
            <HeaderRow>
                <StyledLogo />
                <StyledNavLink to="/swap" >Swap</StyledNavLink>
                <StyledNavLink to="/chart" >Chart</StyledNavLink>
                <Web3Status />
            </HeaderRow>
        </HeaderWrapper>
    );
}

export default Header;
