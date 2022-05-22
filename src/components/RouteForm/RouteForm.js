import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input/Input';

import StyledRouteForm from './RouteForm.styled';
import Submit from 'components/Submit/Submit';

const RouteForm = () => {
  const initData = {
    pointA: '',
    pointB: '',
  };
  const [routePoints, setRoutePoints] = useState(initData);
  const { pointA, pointB } = routePoints;

  const changeValue = (e) => {
    e.preventDefault();
    setRoutePoints({ ...routePoints, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <StyledRouteForm onSubmit={onSubmit}>
      <label>Start point:</label>
      <Input
        name="pointA"
        value={pointA}
        placeholder="City, street"
        onChange={changeValue}
      />
      <label>End point:</label>
      <Input
        name="pointB"
        value={pointB}
        placeholder="City, street"
        onChange={changeValue}
      />
      <Submit name="">Search</Submit>
    </StyledRouteForm>
  );
};
RouteForm.propTypes = {};
export default RouteForm;
