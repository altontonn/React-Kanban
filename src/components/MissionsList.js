import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getMission } from '../redux/MissionsActions/MissionAction';
import Mission from './Mission';

function Missions() {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      if (missions.length === 0) dispatch(getMission());
    });
  }, []);

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th> Mission</th>
            <th>Description</th>
            <th> Status</th>
            <th> &nbsp;</th>
          </tr>
        </thead>
        <tbody>
          { missions.map((item) => (
            <Mission
              key={missions.length}
              missionName={item.mission_name}
              missionDesc={item.description}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
