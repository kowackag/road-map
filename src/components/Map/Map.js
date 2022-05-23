import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet';
import { MapPointsContext } from 'context';

const Map = () => {
  const { mapPoints } = useContext(MapPointsContext);
  const [markerPos, setMarkerPos] = useState([]);

  useEffect(() => {
    setMarkerPos(Object.values(mapPoints));
  }, [mapPoints]);
//   console.log('------marker-------');
//   console.log(markerPos);

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={['51.505', '-0.09']}>
          <Popup>Easily customizable.</Popup>
        </Marker>
        {markerPos.length > 0
          ? markerPos.map(({ address, lng, lat }, ind) => {
              return (
                <Marker key={ind} position={[lat, lng]}>
                  <Popup>{address}</Popup>
                </Marker>
              );
            })
          : null}
      </MapContainer>
    </div>
  );
};
Map.propTypes = {};
export default Map;
