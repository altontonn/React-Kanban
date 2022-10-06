import React from 'react';
import { Route, Routes } from 'react-router';
import Missions from './MissionsList';
import Profile from './Profile';
import RocketList from './RocketList';

function RouterNavLink() {
  return (
    <Routes>
      <Route path="/missions" element={<Missions />} />
      <Route path="/rockets" element={<RocketList />} />
      <Route exact strict path="/" element={<Profile />} />
    </Routes>
  );
}
export default RouterNavLink;
