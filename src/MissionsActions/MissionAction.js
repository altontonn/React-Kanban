import { createAsyncThunk } from '@reduxjs/toolkit';

const initalstate = [];

// API url
const url = 'https://api.spacexdata.com/v3/missions';

// create action type
// const JOIN_MISSION = 'spacehub/missions/JOIN_MISSION';
// const LEAVE_MISSION = 'spacehub/missions/LEAVE_MISSION';
const GET_MISSION = 'spacehub/missions/GET_MISSION';

// create actions
export const getMission = createAsyncThunk(GET_MISSION, async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return { mission: data };
  } catch (err) {
    alert(err);
    return 'Mission data failed';
  }
});

export const misssionReducer = (state = initalstate, action) => {
  switch (action.type) {
    case 'spacehub/missions/GET_MISSION/fulfilled':
      console.log(action.type);
      console.log(action.payload.mission)
      return action.payload.mission;
    default:
      return state;
  }
};
