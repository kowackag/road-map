import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

import StyledLogo from './Logo.styled';

const Logo = () => {
  return (
    <StyledLogo>
      <FontAwesomeIcon icon={faMap} />
      <div>
        <p>Map</p>
        <p>Route planner</p>
      </div>
    </StyledLogo>
  );
};

export default Logo;
