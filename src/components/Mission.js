import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { missionName, missionDesc } = props;

  return (
    <tr>
      <td>
        {' '}
        {missionName}
      </td>
      <td>{missionDesc}</td>
      <td colSpan={1}>
        <span className="badge-primary">Active Member</span>
      </td>
      <td>
        <button type="button">Join Mission</button>
      </td>
    </tr>

  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
};

export default Mission;
