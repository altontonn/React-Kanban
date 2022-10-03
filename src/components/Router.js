import React from 'react';
import { Route, Routes } from 'react-router';
import Mission from './Missions';
import Profile from './Profile';
import Rocket from './Rockets';

function RouterNavLink() {
  return (
    <Routes>
      <Route path="/missions" element={<Mission />} />
      <Route path="/rockets" element={<Rocket />} />
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}
export default RouterNavLink;
