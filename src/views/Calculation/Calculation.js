import React, { useContext } from 'react';

import { MapPointsContext } from 'context';
import { calculator } from 'helpers';

import Map from 'components/Map/Map';
import Input from 'components/Input/Input';

import StyledTitle from 'components/Title.styled';
import StyledCalculation, {
  StyledForm,
  StyledInfoSection,
} from './Calculation.styled';

const Calculation = () => {
  const { distance, price, setPrice } = useContext(MapPointsContext);
  const { totalPrice, totalTime } = calculator(distance, price);

  return (
    <StyledCalculation>
      <StyledTitle>Calculation</StyledTitle>
      <>
        <Map center={{ lat: 52.237049, lng: 21.017532 }} zoom={4} />
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
            <span>{distance ? ` ${distance} km` : ''}</span>
          </p>

          <p>
            Total time:<span>{totalTime ? ` ${totalTime} days` : ''}</span>
          </p>
          <p>
            Total price:<span>{distance ? ` ${totalPrice} euro` : ''}</span>
          </p>
        </StyledInfoSection>
      </>
    </StyledCalculation>
  );
};

export default Calculation;
