import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import Leaflet from 'leaflet';

const createRoutineMachineLayer = ({ points }) => {
  const { pointA, pointB } = points;
  const instance = Leaflet.Routing.control({
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
    showAlternatives: false,
  });

  return instance;
};

// export const getDistance = (points) => {
//   const { pointA, pointB } = points;
//   const instance = Leaflet.Routing.control({
//     waypoints: [
//       L.latLng(pointA.lat, pointA.lng),
//       L.latLng(pointB.lat, pointB.lng),
//     ],
//   });

//   return instance.on('routesfound', function (e) {
//     const routes = e.routes;
//     const summary = routes[0].summary;
//     console.log(summary.totalDistance);
//   });
// };

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
