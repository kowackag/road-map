import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
} from 'react-leaflet';
import Routing from 'RoutingMachine';
import { MapPointsContext } from 'context';

const Map = ({ points, isRouting, center, zoom }) => {
  const { pointA, pointB } = points;
  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={zoom}
      scrollWheelZoom={true}
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
      {isRouting && pointA && pointB ? <Routing points={points} /> : null}
    </MapContainer>
  );
};
Map.propTypes = {};
export default Map;
