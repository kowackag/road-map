import React, { useState, useContext } from 'react';

import { searchPointAPI } from 'api/HereAPI';
import { MapPointsContext } from 'context';
import { validateData } from 'validateData';
import { useStorage } from 'hooks/useStorage';

import Input from 'components/Input/Input';
import Submit from 'components/Submit/Submit';
import XmarkIcon from 'components/XmarkIcon';
import Error from 'components/Error/Error';

import StyledRouteForm, { Wrapper } from './RouteForm.styled';

const RouteForm = () => {
  const { mapPoints, setMapPoints, setIsRouting, setDistance } =
    useContext(MapPointsContext);
  const [points, setPoints] = useState(mapPoints);
  const { pointA, pointB } = points;
  const [suggestions, setSuggestions] = useState();
  const [errors, setErrors] = useState();
  const [isActive, setIsActive] = useState(false);
  const [getFromLS, setToLS] = useStorage();

  const changeValue = (e) => {
    e.preventDefault();
    setIsRouting(false);
    setPoints({
      ...mapPoints,
      [e.target.name]: { address: e.target.value },
    });
  };

  const searchPoint = (e) => {
    e.preventDefault();
    changeValue(e);
    if (e.target.value.length > 2) {
      setIsActive(true);
      searchPointAPI(e.target.value).then((resp) =>
        setSuggestions({ ...suggestions, [e.target.name]: resp.items })
      );
    }
  };

  const setValue = (e) => {
    e.preventDefault();
    const copyPoints = {
      ...points,
      [e.target.dataset.name]: {
        address: e.target.dataset.code,
        lat: e.target.dataset.lat,
        lng: e.target.dataset.lng,
      },
    };
    setPoints(copyPoints);
    setMapPoints(copyPoints);
    setSuggestions([]);
  };

  const clearValue = (e) => {
    e.preventDefault();
    setMapPoints({ ...points, [e.currentTarget.dataset.name]: '' });
    setPoints({ ...points, [e.currentTarget.dataset.name]: '' });
    setDistance('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validateData(points);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsRouting(true);
      setToLS(points, 'lastRoute');
      getFromLS('history')
        ? setToLS([...getFromLS('history'), points], 'history')
        : setToLS([points], 'history');
    }
  };

  const inputFields = [
    {
      name: 'pointA',
      value: pointA ? pointA.address : '',
      items: suggestions ? suggestions.pointA : [],
      err: errors ? errors.pointA : '',
      label: 'Start point',
    },
    {
      name: 'pointB',
      value: pointB ? pointB.address : '',
      items: suggestions ? suggestions.pointB : [],
      err: errors ? errors.pointB : '',
      label: 'Destination',
    },
  ];

  return (
    <StyledRouteForm onSubmit={onSubmit}>
      <div>
        {inputFields.map(({ name, value, items, err, label }) => (
          <React.Fragment key={name}>
            <label htmlFor={name}>{label}</label>
            <Wrapper>
              <Input
                id={name}
                name={name}
                value={value}
                items={items}
                isActive={isActive}
                setIsActive={setIsActive}
                placeholder="City, Street No."
                onChange={searchPoint}
                setValue={setValue}
                err={err}
              />
              <XmarkIcon name={name} clearValue={clearValue} />
              {err && <Error err={err} />}
            </Wrapper>
          </React.Fragment>
        ))}
      </div>
      <Submit name="">Search</Submit>
    </StyledRouteForm>
  );
};

export default RouteForm;
