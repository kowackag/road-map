import React, { useEffect, useContext } from 'react';

import { MapPointsContext } from 'context';

import { useStorage } from 'hooks/useStorage';
import RouteForm from 'components/RouteForm/RouteForm';
import Map from 'components/Map/Map';

import StyledTitle from 'components/Title.styled';
import StyledRoutePlanner, { Wrapper } from './RoutePlanner.styled';

const RoutePlanner = () => {
  const [getFromLS] = useStorage();
  const { mapPoints, setMapPoints, setIsRouting } =
    useContext(MapPointsContext);
  const { pointA, pointB } = mapPoints;

  useEffect(() => {
    const lastRoute = getFromLS('lastRoute');
    if (lastRoute && !pointA && !pointB) {
      setMapPoints(lastRoute);
      setIsRouting(true);
    }
  }, [getFromLS, setMapPoints, pointA, pointB, setIsRouting]);

  return (
    <StyledRoutePlanner>
      <StyledTitle>Start planning route</StyledTitle>
      <Wrapper>
        <Map center={{ lat: 52.237049, lng: 21.017532 }} />
        <RouteForm />
      </Wrapper>
    </StyledRoutePlanner>
  );
};

export default RoutePlanner;
