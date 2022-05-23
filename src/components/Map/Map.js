import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import Routing from 'RoutingMachine';

const Map = ({ points, isRouting, center, zoom }) => {
  const { pointA, pointB } = points;
  return (
    <div>
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
        {isRouting && <Routing points={points} />}
      </MapContainer>
    </div>
  );
};
Map.propTypes = {};
export default Map;
