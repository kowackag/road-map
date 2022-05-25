import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import Leaflet from 'leaflet';
import { MapPointsContext } from 'context';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const Routing = ({ points }) => {
  const { pointA, pointB } = points;
  const { setDistance } = useContext(MapPointsContext);
  const createRoutineMachineLayer = () => {
    const instance = L.Routing.control({
      waypoints: [
        L.latLng(pointA.lat, pointA.lng),
        L.latLng(pointB.lat, pointB.lng),
      ],
      lineOptions: {
        styles: [
          {
            color: 'blue',
            opacity: 0.6,
            weight: 4,
          },
        ],
      },
      fitSelectedRoutes: true,
      showAlternatives: false,
    });

    instance.on('routesfound', function (e) {
      const routes = e.routes;
      const summary = routes[0].summary;
      setDistance((summary.totalDistance / 1000).toFixed(2));
    });

    return instance;
  };

  const RoutingMachine = createControlComponent(createRoutineMachineLayer);

  return <RoutingMachine />;
};

export default Routing;
