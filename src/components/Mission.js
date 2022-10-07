import React from 'react';
import PropTypes from 'prop-types';
import { joinMission,leaveMisson} from '../redux/profile/profile';
import { useDispatch, useSelector } from 'react-redux';


const Mission = (props) => {
  const { missionName, missionDesc } = props;
  const joinedMission = useSelector((state) => state.profile.joined);
  const dispatch = useDispatch();

  const handleJoin = (e) =>{
    e.preventDefault();
    const name = missionName;
    if(joinedMission.includes(name)){ 
      return
    }
    dispatch(joinMission(name))
  }
  const handleLeave = (e) =>{
    e.preventDefault();
    dispatch(leaveMisson(missionName))
  }

  return (
    <tr>
      <td>
        {' '}
        {missionName}
      </td>
      <td>{missionDesc}</td>
      {joinedMission.includes(missionName) && (
      <td colSpan={1}>
        <span className="badge-primary">Active Member</span>
      </td>
      )}

      {!joinedMission.includes(missionName) && (
      <td colSpan={1}>
        <span className="badge-primary">Not a Member</span>
      </td>
      )}
      {joinedMission.includes(missionName) && (
      <td>
        <button type="button" onClick= {handleLeave}>Join Mission</button>
      </td>
      )}
      {!joinedMission.includes(missionName) && (
      <td>
        <button type="button" onClick= {handleJoin}>Join Mission</button>
      </td>
      )}
    </tr>


  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
};

export default Mission;
