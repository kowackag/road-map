import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

const StyledRoutePlanner = styled.article`
  height: 100%;
  .leaflet-container {
    width: 100%;
    height: 700px;
    border: 3px solid var(--color-red);
  }
  .leaflet-left {
    left: 300px;
  }
  .leaflet-routing-container {
    max-height: 300px;
    overflow-y: scroll;
    &:hover {
      background-color: white;
    }
  }
`;
export default StyledRoutePlanner;
