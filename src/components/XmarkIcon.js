import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const XmarkIcon = ({ name, clearValue }) => {
  return (
    <div data-name={name} onClick={clearValue}>
      <FontAwesomeIcon icon={faRectangleXmark} />
    </div>
  );
};
XmarkIcon.propTypes = {};
export default XmarkIcon;
