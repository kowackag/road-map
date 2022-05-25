import styled from 'styled-components';

export const StyledForm = styled.form`
  display: block;
  margin: 2rem;
  label {
    margin-right: 1rem;
  }
`;

export const StyledInfoSection = styled.section`
  margin: 2rem;
  span {
    font-size: 3.5rem;
    color: var(--color-red);
  }
`;

const StyledCalculation = styled.div`
  font-size: 1.8rem;
  .leaflet-container {
    position: relative;
    width: 100%;
    height: 500px;
    border: 3px solid var(--color-green);
  }
  .leaflet-left {
    left: 0;
  }
  .leaflet-routing-container {
    max-height: 300px;
    overflow-y: scroll;
    background-color: white;
  }
`;
export default StyledCalculation;
