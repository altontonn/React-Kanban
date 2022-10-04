import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getMission } from '../MissionsActions/MissionAction';

function Mission() {
  let missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getMission());
  }, []);
  console.log(missions);
  return (  
    <div>
      <div>
        {' '}
      </div> 
              <Table  bordered>
              <thead>
                <tr>
                  <th> Mission</th>
                  <th>Description</th>
                  <th> Status</th>
                  <th> &nbsp;</th>
                </tr>
              </thead>
              { missions.map((item) => (
              <tbody>
                <tr key={item.mission_id}>
                  <td> {item.mission_name}</td>
                  <td> 
                    {item.description}
                  </td>
                  <td colSpan={1}>
                    <span type="button">Active Member</span>
                  </td>
                  <td>
                    <button type="button">Leave Mission</button>
                  </td>
                </tr>
              </tbody>
          
      )
            )};
          </Table>
    </div>
  );
}
export default Mission;
