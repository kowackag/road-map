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
    font-size: 2.5rem;
    color: var(--color-red);
    @media (min-width: 740px) {
      font-size: 3.5rem;
    }
  }
`;

const StyledCalculation = styled.article`
  .leaflet-container {
    width: 100%;
    height: 500px;
    border: 3px solid var(--color-green);
  }
  .leaflet-left {
    left: 0;
  }

  .leaflet-routing-container {
    background-color: white;
  }
`;
export default StyledCalculation;
