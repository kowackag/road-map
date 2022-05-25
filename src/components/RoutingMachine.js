import React, { useContext } from 'react';
import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';

import { MapPointsContext } from 'context';

const Routing = () => {
  const { mapPoints, setDistance } = useContext(MapPointsContext);
  const { pointA, pointB } = mapPoints;

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
