import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';


function Profile() {
  const profileMissonData = useSelector(state => state.profile.joined);
  return (
    <div>
      <h1> My Missions</h1>
     <Table bordered className="profileTable">
     
      <tbody>
      {profileMissonData.map((item) => 
      <tr key={uuid}>
        <td>{item}</td>
        </tr>
        )}
      </tbody>
     </Table>
    </div>
  );
}

export default Profile;
