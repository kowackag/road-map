import React, { useContext } from 'react';

import { PaginationContext } from 'context';

import StyledHistoryNav from './HistoryNav.styled';

const HistoryNav = () => {
  const { page, setPage, pages } = useContext(PaginationContext);
  const buttons = new Array(pages).fill(0).map((item, index) => (
    <li key={index}>
      <button onClick={() => setPage(index + 1)}>{index + 1}</button>
    </li>
  ));

  return (
    <StyledHistoryNav page={page}>
      <ul>{buttons}</ul>
    </StyledHistoryNav>
  );
};

export default HistoryNav;
