import styled from 'styled-components';

const StyledSubmit = styled.button`
  position: relative;
  display: block;
  padding: 1rem 5rem;
  margin: 3rem auto 1rem;
  border: 2px solid var(--color-darkBlue);
  background-color: white;
  color: var(--color-darkBlue);
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  &::before {
    content: '${(props) => props.children}';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    border: none;
    background-color: var(--color-darkBlue);
    color: white;
    opacity: 0;
    transition: opacity 0.4s ease-out;
    will-change: opacity;
    z-index: 2;
  }
  &:hover::before {
    opacity: 1;
  }
`;

export default StyledSubmit;
