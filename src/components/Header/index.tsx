import React from "react";
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished'
import { ReactComponent as Logo } from '../../assets/minimal-logo.svg';
import { RowCenter } from '../Row';
import Web3Status from '../Web3Status'

const StyledWeb3Status = styled(Web3Status)``

const HeaderRow = styled(RowCenter)`
    width: 100%;

    & > *:last-child {
        margin-left: auto;
        margin-right: 20px;
    }
`;

const HeaderWrapper = styled.div`
    display: flex;
    border-bottom: 0.5px;
    border-bottom-style: solid;
    border-bottom-color: rgba(0, 0, 0, 0.3);
    height: 64px;
    width: 100%;
`;

const LogoLink = styled.a`
    display: flex;
    align-self: center;
    margin-left: 20px;
    margin-right: 10px;

    :focus {
        outline: none;
    }
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
    activeClassName
})`
    letter-spacing: 0.2px;
    outline: none;
    align-items: left;
    text-decoration: none;
    font-size: 1rem;
    color: ${({theme}) => theme.text2};
    font-weight: 600;
    margin: 0 10px;

    &.${activeClassName} {
        color: ${({theme}) => theme.primaryText1};
    }

    &:hover, &:focus {
        opacity: 0.7;
    }
`

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderRow>
                <LogoLink href="/" >
                    <Logo height="24px" />
                </LogoLink>
                <StyledNavLink to="/swap" >Swap</StyledNavLink>
                <StyledNavLink to="/chart" >Chart</StyledNavLink>
                <StyledWeb3Status />
            </HeaderRow>
        </HeaderWrapper>
    );
}
