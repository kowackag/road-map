import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStorage } from 'hooks/useStorage';
import StyledTitle from 'components/Title.styled';
import HistoryNav from 'components/HistoryNav/HistoryNav';
import { MapPointsContext, PaginationContext } from 'context';
import StyledHome from './Home.styled';
import Pagination from 'Pagination';
const Home = () => {
  const [getFromLS, setToLS] = useStorage();
  const [historyList, setHistoryList] = useState([]);
  const { mapPoints, setMapPoints, setIsRouting } =
    useContext(MapPointsContext);
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
        <ul>
          {historyList.length === 0 ? (
            <p>No previous searches were found</p>
          ) : (
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
          )}
        </ul>
        <HistoryNav />
      </StyledHome>
    </PaginationContext.Provider>
  );
};
Home.propTypes = {};
export default Home;
