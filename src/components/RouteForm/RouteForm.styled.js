import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const StyledRouteForm = styled.form`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem;
  width: 300px;
  border-right: 3px solid var(--color-darkBlue);
  border-bottom: 3px solid var(--color-darkBlue);
  font-size: 1.3rem;
  color: var(--color-darkBlue);
  background-color: white;
  z-index: 1000;

  & label:not(:first-child) {
    display: block;
    margin-top: 3rem;
  }
  & svg {
    font-size: 2rem;
  }
`;
export default StyledRouteForm;
