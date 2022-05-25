import styled from 'styled-components';

const StyledSupport = styled.article`
  ul {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  li {
    list-style: none;
    @media (min-width: 740px) {
      display: grid;
      grid-template-columns: 100px 1fr;
    }
  }
  p {
    margin-bottom: 2rem;
  }
`;

export default StyledSupport;
