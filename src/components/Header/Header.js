import React from 'react';

import Logo from 'components/Logo/Logo';

import { StyledHeader, StyledNav, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/route-planner">Route planner</StyledLink>
        <StyledLink to="/calculation">Calculation</StyledLink>
        <StyledLink to="/support">Support</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
