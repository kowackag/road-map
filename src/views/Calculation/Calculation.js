import React, { useState, useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import innerText from 'react-innertext';

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
  const { mapPoints, isRouting, distance, price, setPrice } =
    useContext(MapPointsContext);

  const { totalPrice, totalTime } = calculator(distance, price);

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
            Total distance:
            <span>{distance ? `${distance} km` : ''}</span>
          </p>

          <p>
            Total time:<span>{totalTime ? `${totalTime} days` : ''}</span>
          </p>
          <p>
            Total price :<span>{distance ? `${totalPrice} euro` : ''}</span>
          </p>
        </StyledInfoSection>
      </>
    </StyledCalculation>
  );
};
Calculation.propTypes = {};
export default Calculation;
