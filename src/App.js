import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { MapPointsContext } from 'context';
import { useStorage } from 'hooks/useStorage';

import Header from 'components/Header/Header';
import Home from 'views/Home/Home';
import RoutePlanner from 'views/RoutePlanner/RoutePlanner';

import StyledApp, { Wrapper } from 'App.styled';

const App = () => {
  const [mapPoints, setMapPoints] = useState({ pointA: '', pointB: '' });
  const [isRouting, setIsRouting] = useState(false);
  return (
    <MapPointsContext.Provider
      value={{
        mapPoints,
        setMapPoints,
        isRouting,
        setIsRouting,
      }}
    >
      <StyledApp>
        <Router>
          <Header />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/route-planner" element={<RoutePlanner />} />
              <Route path="/map" element={<RoutePlanner />} />
            </Routes>
          </Wrapper>
        </Router>
      </StyledApp>
    </MapPointsContext.Provider>
  );
};

export default App;
