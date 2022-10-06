import React from 'react';
import { Route, Routes } from 'react-router';
import Missions from './MissionsList';
import Profile from './Profile';
import Rocket from './Rockets';

function RouterNavLink() {
  return (
    <Routes>
      <Route path="/missions" element={<Missions />} />
      <Route path="/rockets" element={<Rocket />} />
      <Route exact strict path="/" element={<Profile />} />
    </Routes>
  );
}
export default RouterNavLink;
