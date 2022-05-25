import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

const XmarkIcon = ({ name, clearValue }) => {
  return (
    <div data-name={name} onClick={clearValue}>
      <FontAwesomeIcon icon={faRectangleXmark} />
    </div>
  );
};

export default XmarkIcon;
