import { createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY = 'REACT-KANBAN/src/RocketActions/DISPLAY';
const initialState = [];

export const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${DISPLAY}/fulfilled`:
      // eslint-disable-next-line
      console.log('state: ', state);
      return action.payload.rocket;
    default:
      return state;
  }
};

export const fetchRockets = createAsyncThunk(DISPLAY, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await response.json();
  return { rocket: rockets };
});
