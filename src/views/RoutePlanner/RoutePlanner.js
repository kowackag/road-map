import React from 'react';
import PropTypes from 'prop-types';
import Map from 'components/Map/Map';

import RouteForm from 'components/RouteForm/RouteForm';
// import MapContainer from 'components/MapContainer/MapContainer';
import StyledRoutePlanner, { Wrapper } from './RoutePlanner.styled';
import StyledTitle from 'components/Title.styled';

const RoutePlanner = () => {
  return (
    <StyledRoutePlanner>
      <StyledTitle>Start planning route</StyledTitle>
      <Wrapper>
        <Map />
        <RouteForm />
      </Wrapper>
    </StyledRoutePlanner>
  );
};
RoutePlanner.propTypes = {};
export default RoutePlanner;
