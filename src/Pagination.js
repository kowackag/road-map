import React, { useEffect, useContext } from 'react';
import { PaginationContext } from 'context';

const Pagination = (props) => {
  const { children } = props;
  const length = children.length;

  const { page, limit = 10, setPages } = useContext(PaginationContext);

  const begin = limit * (page - 1);
  const end = page * limit;

  const pages = Math.ceil(length / limit);

  useEffect(() => {
    setPages(pages);
  }, [children, pages, setPages]);

  return <>{children.slice(begin, end)}</>;
};
export default Pagination;
