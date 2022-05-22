import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem;
`;
const StyledApp = styled.article`
  width: 90%;
  height: 90%;
  max-width: 1440px;
  border-radius: 20px;
  background: var(--color-bgcLight);
  box-shadow: 6px 6px 12px var(--color-darkShadow),
    -6px -6px 12px var(--color-darkShadow);
`;
export default StyledApp;
