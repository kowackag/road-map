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

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
      routesfound(e) {
        const routes = e.routes;
        const summary = routes[0].summary;
        console.log(summary.totalDistance);
        const distEl = document.getElementById('dist');
        if (distEl)
          distEl.innerText = (summary.totalDistance / 1000).toFixed(2);
      },
    });
    map.on('routesfound', function (e) {
      const routes = e.routes;
      const summary = routes[0].summary;
      console.log(summary.totalDistance);
      const distEl = document.getElementById('dist');
      if (distEl) distEl.innerText = (summary.totalDistance / 1000).toFixed(2);
    });
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

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
      <LocationMarker />
      {(isRouting && pointA && pointB) ? <Routing points={points} /> : null}
    </MapContainer>
  );
};
Map.propTypes = {};
export default Map;
