import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  border: 3px solid var(--color-red);
`;
const StyledRoutePlanner = styled.article`
  height: 100%;
  .leaflet-container {
    width: 100%;
    height: 700px;
  }
  .leaflet-left {
    left: 250px;
  }
`;
export default StyledRoutePlanner;
