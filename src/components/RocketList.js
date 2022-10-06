import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/RocketActions/RocketAction';

function RocketList() {
  const rockets = useSelector((state) => state.rockets);
  // eslint-disable-next-line
  console.log("rockets list : ", rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [rockets, dispatch]);
  return (
    <div className="cardContainer">
      {rockets.map((rocket) => (
        <div key={rockets.length} className="card">
          <div className="card-1">
            <div className="cardImg">
              <img src={rocket.flickr_images} alt="code-vector" />
            </div>
            <div className="cardContent">
              <p className="p1">{rocket.rocket_name}</p>
              <p className="p2">{rocket.description}</p>
              <button className="button-a" type="button">Reserve Rocket</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default RocketList;
