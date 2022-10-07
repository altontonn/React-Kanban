import React from 'react';
import { Route, Routes } from 'react-router';
import Missions from './MissionsList';
import RocketList from './RocketList';
import AvailableRockets from '../redux/profile/RocketsProfile';

function RouterNavLink() {
  return (
    <Routes>
      <Route path="/missions" element={<Missions />} />
      <Route path="/rockets" element={<RocketList />} />
      <Route exact strict path="/" element={<AvailableRockets />} />
    </Routes>
  );
}
export default RouterNavLink;
