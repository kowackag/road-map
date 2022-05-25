import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { MapPointsContext } from 'context';

import Header from 'components/Header/Header';
import Home from 'views/Home/Home';
import RoutePlanner from 'views/RoutePlanner/RoutePlanner';

import StyledApp, { Wrapper } from 'components/App.styled';
import Calculation from 'views/Calculation/Calculation';
import Support from 'views/Support/Support';

const App = () => {
  const [mapPoints, setMapPoints] = useState({ pointA: '', pointB: '' });
  const [isRouting, setIsRouting] = useState(false);
  const [distance, setDistance] = useState();
  const [price, setPrice] = useState(0.15);
  return (
    <MapPointsContext.Provider
      value={{
        mapPoints,
        setMapPoints,
        isRouting,
        setIsRouting,
        distance,
        setDistance,
        price,
        setPrice,
      }}
    >
      <StyledApp>
        <Router>
          <Header />
          <Wrapper>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/route-planner" element={<RoutePlanner />} />
              <Route path="/calculation" element={<Calculation />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </Wrapper>
        </Router>
      </StyledApp>
    </MapPointsContext.Provider>
  );
};

export default App;
