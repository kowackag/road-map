import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
  font-size: 3rem;
  line-height: 0.9;
  background-color: var(--color-darkBlue);
  color: white;
  svg {
    margin-right: 2rem;
  }
  p:last-child {
    font-size: 1.6rem;
  }

  @media (min-width: 740px) {
    border-top-left-radius: 20px;
  }
`;

export default StyledLogo;
