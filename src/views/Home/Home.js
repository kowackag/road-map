import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useStorage } from 'hooks/useStorage';
import { MapPointsContext, PaginationContext } from 'context';

import HistoryNav from 'components/HistoryNav/HistoryNav';
import Pagination from 'Pagination';

import StyledHome from './Home.styled';
import StyledTitle from 'components/Title.styled';

const Home = () => {
  const [getFromLS] = useStorage();
  const [historyList, setHistoryList] = useState([]);
  const { setMapPoints, setIsRouting } = useContext(MapPointsContext);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(historyList.length);

  const handleClick = (pointA, pointB) => {
    setMapPoints({ pointA, pointB });
    setIsRouting(true);
  };

  useEffect(() => {
    const history = getFromLS('history');
    if (history) setHistoryList(history);
  }, []);

  return (
    <PaginationContext.Provider
      value={{ page, setPage, pages, setPages, limit: 10 }}
    >
      <StyledHome>
        <StyledTitle>Recently searched</StyledTitle>
        {historyList.length === 0 ? (
          <p>No previous searches were found</p>
        ) : (
          <ul>
            <Pagination>
              {historyList.map(({ pointA, pointB }, ind) => (
                <li key={ind}>
                  <Link
                    to="/route-planner"
                    onClick={() => handleClick(pointA, pointB)}
                  >{`${pointA.address} ==> ${pointB.address}`}</Link>
                </li>
              ))}
            </Pagination>
          </ul>
        )}
        <HistoryNav />
      </StyledHome>
    </PaginationContext.Provider>
  );
};

export default Home;
