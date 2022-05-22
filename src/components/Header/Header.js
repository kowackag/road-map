import React from 'react';

import { StyledHeader, StyledNav, StyledLink } from './Header.styled';
import Logo from 'components/Logo/Logo';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/planner">Planner</StyledLink>
        <StyledLink to="/map">Map</StyledLink>
        <StyledLink to="/support">Support</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
