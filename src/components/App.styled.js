import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem;
  font-size: 1.6rem;
  @media (min-width: 740px) {
    padding: 3rem;
  }
`;
const StyledApp = styled.article`
  min-height: 700px;
  width: 100%;
  max-width: 1440px;

  @media (min-width: 740px) {
    width: 100%;
    border-radius: 20px;
    background: var(--color-bgcLight);
    box-shadow: 6px 6px 12px var(--color-darkShadow),
      -6px -6px 12px var(--color-darkShadow);
  }
`;
export default StyledApp;
