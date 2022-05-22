import styled from 'styled-components';

const StyledRouteForm = styled.form`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem;
  width: 250px;
  border-right: 3px solid var(--color-red);
  border-bottom: 3px solid var(--color-red);
  /* background-color: rgba(189, 35, 51, 0.8);
   */
  color: var(--color-red);
  background-color: white;
  z-index: 1000;
`;
export default StyledRouteForm;
