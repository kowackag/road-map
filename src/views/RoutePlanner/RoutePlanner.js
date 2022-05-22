import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet';

import RouteForm from 'components/RouteForm/RouteForm';

import StyledRoutePlanner, { Wrapper } from './RoutePlanner.styled';
import StyledTitle from 'components/Title.styled';

const RoutePlanner = () => {

  return (
    <StyledRoutePlanner>
      <StyledTitle>Start planning route</StyledTitle>
      <Wrapper>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <RouteForm />
      </Wrapper>
    </StyledRoutePlanner>
  );
};
RoutePlanner.propTypes = {};
export default RoutePlanner;
