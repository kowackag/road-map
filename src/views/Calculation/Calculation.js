import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { MapPointsContext } from 'context';
import StyledTitle from 'components/Title.styled';
import Map from 'components/Map/Map';
import StyledCalculation, {
  StyledForm,
  StyledInfoSection,
} from './Calculation.styled';
import { calculator } from 'helpers';
import Input from 'components/Input/Input';

const Calculation = () => {
  const { mapPoints, isRouting } = useContext(MapPointsContext);
  const [price, setPrice] = useState(0.25);
  const [dist, setDist] = useState(900);
  const { totalPrice, totalTime } = calculator(dist, price);
  return (
    <StyledCalculation>
      <StyledTitle>Calculation</StyledTitle>
      <>
        <Map
          points={mapPoints}
          isRouting={isRouting}
          center={{ lat: 52.237049, lng: 21.017532 }}
          zoom={6}
        />
        <StyledForm>
          <label htmlFor="price">Set price per kilometer </label>
          <Input
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            unit="€"
            min={0}
            step="0.0001"
          />
        </StyledForm>
        <StyledInfoSection>
          <p>
            Total distance: <span> {`${totalTime} km`}</span>
          </p>
          <p>
            Total time:<span> {`${totalTime} days`}</span>
          </p>
          <p>
            Total price :<span> {`${totalPrice} euro`}</span>
          </p>
        </StyledInfoSection>
      </>
    </StyledCalculation>
  );
};
Calculation.propTypes = {};
export default Calculation;
