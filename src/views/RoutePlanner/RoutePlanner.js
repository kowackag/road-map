import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Map from 'components/Map/Map';

import RouteForm from 'components/RouteForm/RouteForm';
import { MapPointsContext } from 'context';
import StyledRoutePlanner, { Wrapper } from './RoutePlanner.styled';
import StyledTitle from 'components/Title.styled';

const RoutePlanner = () => {
  const { mapPoints, isRouting } = useContext(MapPointsContext);
  const [markerPos, setMarkerPos] = useState([]);
  console.log('A', markerPos);
  console.log(`isRouting: ${isRouting}`);
  useEffect(() => {
    setMarkerPos(Object.values(mapPoints));
  }, [mapPoints]);
console.log('mapoin', mapPoints)
  return (
    <StyledRoutePlanner>
      <StyledTitle>Start planning route</StyledTitle>
      <Wrapper>
        <Map
          points={mapPoints}
          isRouting={isRouting}
          center={{ lat: 52.237049, lng: 21.017532 }}
          zoom={6}
        />
        <RouteForm />
      </Wrapper>
    </StyledRoutePlanner>
  );
};
RoutePlanner.propTypes = {};
export default RoutePlanner;
