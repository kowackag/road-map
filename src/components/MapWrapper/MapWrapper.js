import React from 'react';
import { MapContainer } from 'react-leaflet';
import { FeatureLayer } from 'react-esri-leaflet';
import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';

const MapWrapper = () => {
  const apiKey = 'YOUR_API_KEY';

  const map = L.map('map').setView([40.91, -96.63], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const searchControl = L.esri.Geocoding.geosearch({
    position: 'topright',
    placeholder: 'Enter an address or place e.g. 1 York St',
    useMapBounds: false,
    providers: [
      L.esri.Geocoding.arcgisOnlineProvider({
        apikey: apiKey,
        nearby: {
          lat: -33.8688,
          lng: 151.2093,
        },
      }),
    ],
  }).addTo(map);

  const results = L.layerGroup().addTo(map);

  searchControl.on('results', function (data) {
    results.clearLayers();
    for (let i = data.results.length - 1; i >= 0; i--) {
      results.addLayer(L.marker(data.results[i].latlng));
    }
  });

  return (
    <MapContainer zoom={8} center={[51.505, -0.09]} scrollWheelZoom={true}>
      {/* <BasemapLayer name="DarkGray" /> */}
      <FeatureLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <EsriLeafletGeoSearch useMapBounds={false} position={[51.505, -0.09]} />
    </MapContainer>
  );
};

export default MapWrapper;
