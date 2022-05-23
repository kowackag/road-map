import styled, { css } from 'styled-components';

const StyledInput = styled.div`
  flex-grow: 2;
  margin-right: 2rem;
  display: block;
  position: relative;
  border: 1px solid var(--color-line);

  & input {
    position: relative;
    display: block;
    padding: 1rem;
    height: 3.5rem;
    width: 100%;
    outline: none;
    border: none;
    cursor: context-menu;
    color: rgb(var(--color-font));
    &:-webkit-autofill {
      box-shadow: inset 12px 12px 36px white, inset -12px -12px 36px white;
      -webkit-text-fill-color: rgb(var(--color-font)) !important;
    }
  }
  & ul {
    display: ${(props) => !props.active && css`none`};
    position: absolute;
    z-index: 1000;
    list-style: none;
    width: 100%;
    max-height: 200px;
    background-color: white;
    font-size: 1.2rem;
    overflow-y: scroll;
    & li {
      color: rgb(var(--color-alfa));
      padding: 1rem 0.4rem;
      border-bottom: 1px solid var(--color-line);
      cursor: pointer;
    }
  }
`;

export default StyledInput;
