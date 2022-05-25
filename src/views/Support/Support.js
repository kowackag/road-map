import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from 'components/Title.styled';
import StyledSupport from './Support.styled';

const Support = () => {
  const contactFields = [
    { name: 'Phone:', value: '+48 605593085' },
    { name: 'Email:', value: 'kowackag@gmail.com' },
    {
      name: 'LinkedIn:',
      value: 'https://www.linkedin.com/in/malgorzata-kowacka/',
    },
  ];
  return (
    <StyledSupport>
      <StyledTitle>Created by Małgorzata Kowacka</StyledTitle>
      <p>If you have any question, do not hesitate and contect me:</p>
      <ul>
        {contactFields.map(({ name, value }, ind) => (
          <li key={ind}>
            <p>{name}</p>
            <p>
              <a href={value}>{value}</a>
            </p>
          </li>
        ))}
      </ul>
      <p>
        If you would like to visit my GitHub:
        <a href="https://github.com/kowackag">github.com/kowackag</a>
      </p>
    </StyledSupport>
  );
};
Support.propTypes = {};
export default Support;
