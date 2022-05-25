import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

import { MapPointsContext } from 'context';
import Routing from 'components/RoutingMachine';

import StyledMap from './Map.styled';

const Map = ({ center, zoom = 6 }) => {
  const [map, setMap] = useState(null);
  const { mapPoints, isRouting } = useContext(MapPointsContext);
  const { pointA, pointB } = mapPoints;
  return (
    <StyledMap>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={zoom}
        scrollWheelZoom={true}
        whenCreated={(map) => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pointA ? (
          <Marker key={pointA.ind} position={[pointA.lat, pointA.lng]}>
            <Popup>{pointA.address}</Popup>
          </Marker>
        ) : null}
        {pointB ? (
          <Marker key={pointB.ind} position={[pointB.lat, pointB.lng]}>
            <Popup>{pointB.address}</Popup>
          </Marker>
        ) : null}
        {isRouting && pointA && pointB ? <Routing /> : null}
      </MapContainer>
    </StyledMap>
  );
};

Map.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number,
};

export default Map;
