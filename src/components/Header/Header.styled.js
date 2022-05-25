import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  @media (min-width: 740px) {
    display: grid;
    grid-template-columns: 230px 1fr;
  }
`;

export const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 1fr;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
  &::after {
    content: '${(props) => props.children}';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    will-change: opacity;
  }
  &:first-child {
    border-bottom: 3px solid var(--color-yellow);
    &::after {
      background-color: var(--color-yellow);
    }
  }
  &:nth-child(2) {
    border-bottom: 3px solid var(--color-red);
    &::after {
      background-color: var(--color-red);
    }
  }
  &:nth-child(3) {
    border-bottom: 3px solid var(--color-green);
    &::after {
      background-color: var(--color-green);
    }
  }
  &:last-child {
    border-bottom: 3px solid var(--color-blue);
    &::after {
      background-color: var(--color-blue);

      @media (min-width: 740px) {
        border-top-right-radius: 20px;
      }
    }
  }
  &.active {
    &::after {
      opacity: 1;
    }
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }

  @media (min-width: 740px) {
    font-size: 1.8rem;
  }
`;
