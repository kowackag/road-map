import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem;
  font-size: 1.6rem;
  @media (min-width: 740px) {
    padding: 3rem;
  }
`;
const StyledApp = styled.article`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  border-radius: 20px;
  background: var(--color-bgcLight);
  box-shadow: 6px 6px 12px var(--color-darkShadow),
    -6px -6px 12px var(--color-darkShadow);

  @media (min-width: 740px) {
    width: 90%;
    height: 90%;
  }
`;
export default StyledApp;
