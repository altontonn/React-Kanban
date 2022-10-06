import React from 'react';
import { Route, Routes } from 'react-router';
import Mission from './Missions';
import Profile from './Profile';
import RocketList from './RocketList';

function RouterNavLink() {
  return (
    <Routes>
      <Route path="/missions" element={<Mission />} />
      <Route path="/rockets" element={<RocketList />} />
      <Route exact strict path="/" element={<Profile />} />
    </Routes>
  );
}
export default RouterNavLink;
