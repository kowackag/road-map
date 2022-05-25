import styled from 'styled-components';

const StyledMap = styled.div`
  .leaflet-routing-container {
    display: none;
    width: 320px;

    @media (min-width: 740px) {
      display: block;
      max-height: 300px;
      overflow-y: scroll;
      &:hover {
        background-color: white;
      }
    }
  }
`;
export default StyledMap;
