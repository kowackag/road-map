import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { MapPointsContext } from 'context';
import StyledTitle from 'components/Title.styled';
import Map from 'components/Map/Map';
import StyledCalculation from './Calculation.styled';
import { countTime } from 'helpers';

const Calculation = () => {
  const { mapPoints, isRouting } = useContext(MapPointsContext);
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
        <section>
          <h3>Total distance: </h3>
          <p>
            Total time:<span> {`${countTime(1000)} days`}</span>
          </p>
          <p>{`Cost: ${countTime(1000)}`}</p>
        </section>
      </>
    </StyledCalculation>
  );
};
Calculation.propTypes = {};
export default Calculation;
