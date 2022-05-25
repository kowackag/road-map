import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyledInput, { StyledUnit } from './Input.styled';

const Input = ({
  name,
  value,
  items,
  onChange,
  setValue,
  placeholder,
  type,
  min,
  step,
  unit,
  isActive,
  setIsActive,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isOnMouse, setIsOnMouse] = useState(false);

  const handleOnBlur = () => {
    if (setIsActive) {
      setIsFocus(false);
      isOnMouse || setIsActive(false);
    }
  };

  const handleOnMouseLeave = () => {
    setIsOnMouse(false);
    isFocus || setIsActive(false);
  };

  return (
    <StyledInput active={isActive}>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={handleOnBlur}
        min={min}
        step={step}
      />
      {unit && <StyledUnit>{unit}</StyledUnit>}
      <ul
        onMouseOver={() => setIsOnMouse(true)}
        onMouseLeave={handleOnMouseLeave}
      >
        {items === undefined || items.length === 0
          ? null
          : items.map((el) => (
              <li
                key={el.id}
                onClick={setValue}
                value={el.title}
                data-code={el.title}
                data-name={name}
                data-lat={el.position.lat}
                data-lng={el.position.lng}
              >
                {el.title}
              </li>
            ))}
      </ul>
    </StyledInput>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.number,
  step: PropTypes.string,
  unit: PropTypes.string,
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func,
};

export default Input;
