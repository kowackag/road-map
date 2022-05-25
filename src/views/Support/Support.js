import React from 'react';

import StyledTitle from 'components/Title.styled';
import StyledSupport from './Support.styled';

const Support = () => {
  const contactFields = [
    { name: 'Phone:', value: '+48 605 593 085', href: 'tel:+48605593085' },
    {
      name: 'Email:',
      value: 'kowackag@gmail.com',
      href: 'mailto:kowackag@gmail.com',
    },
    {
      name: 'LinkedIn:',
      value: 'www.linkedin.com/in/malgorzata-kowacka/',
      href: 'https://www.linkedin.com/in/malgorzata-kowacka/',
    },
  ];
  return (
    <StyledSupport>
      <StyledTitle>Created by Małgorzata Kowacka</StyledTitle>
      <p>If you have any question, do not hesitate and contect me:</p>
      <ul>
        {contactFields.map(({ name, value, href }, ind) => (
          <li key={ind}>
            <p>{name}</p>
            <p>
              <a href={href}>{value}</a>
            </p>
          </li>
        ))}
      </ul>
      <p>If you would like to visit my GitHub: </p>
      <p>
        <a href="https://github.com/kowackag"> github.com/kowackag</a>
      </p>
    </StyledSupport>
  );
};

export default Support;
