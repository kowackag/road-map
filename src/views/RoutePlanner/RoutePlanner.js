import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Map from 'components/Map/Map';
import { useStorage } from 'hooks/useStorage';
import RouteForm from 'components/RouteForm/RouteForm';
import { MapPointsContext } from 'context';
import StyledRoutePlanner, { Wrapper } from './RoutePlanner.styled';
import StyledTitle from 'components/Title.styled';

const RoutePlanner = () => {
  const [getFromLS, setToLS] = useStorage();
  const { mapPoints, setMapPoints, isRouting, setIsRouting } =
    useContext(MapPointsContext);
  // const { pointA, pointB } = mapPoints;
  // const [markerPos, setMarkerPos] = useState([]);

  // useEffect(() => {
  //   setMarkerPos(Object.values(mapPoints));
  // }, [mapPoints, pointA, pointB]);

  useEffect(() => {
    const lastRoute = getFromLS('lastRoute');
    if (lastRoute) {
      setMapPoints(lastRoute);
      setIsRouting(true);
    }
  }, []);
console.log(mapPoints)
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
