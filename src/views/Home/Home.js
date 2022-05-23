import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStorage } from 'hooks/useStorage';
import StyledTitle from 'components/Title.styled';
import { MapPointsContext } from 'context';

const Home = () => {
  const [getFromLS, setToLS] = useStorage();
  const [historyList, setHistoryList] = useState(getFromLS('history'));
  const { mapPoints, setMapPoints, setIsRouting } =
    useContext(MapPointsContext);
  console.log(historyList);
  console.log(historyList[0].pointA);

  const handleClick = (pointA, pointB) => {
    setMapPoints({ pointA, pointB });
    setIsRouting(true);
  };

  return (
    <>
      <StyledTitle>Recently searched</StyledTitle>
      <ul>
        {historyList.map(({ pointA, pointB }, ind) => (
          <li key={ind}>
            <Link
              to="/route-planner"
              onClick={() => handleClick(pointA, pointB)}
            >{`${pointA.address} ==> ${pointB.address}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
Home.propTypes = {};
export default Home;
