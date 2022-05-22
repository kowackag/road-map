import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Header from 'components/Header/Header';
import Home from 'views/Home/Home';
import RoutePlanner from 'views/RoutePlanner/RoutePlanner';

import StyledApp, { Wrapper } from 'App.styled';

const App = () => {
  return (
    <StyledApp>
      <Router>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<RoutePlanner />} />
            <Route path="/map" element={<RoutePlanner />} />
          </Routes>
        </Wrapper>
      </Router>
    </StyledApp>
  );
};

export default App;
