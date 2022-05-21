import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import RoutePlanner from 'components/RoutePlanner/RoutePlanner';

import StyledApp, { Wrapper } from 'App.styled';

const App = () => {
  return (
    <StyledApp>
      <Router>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/route-planner" element={<RoutePlanner />} />
          </Routes>
        </Wrapper>
      </Router>
    </StyledApp>
  );
};

export default App;
