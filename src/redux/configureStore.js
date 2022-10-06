import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rocketReducer } from './RocketActions/RocketAction';
import { misssionReducer } from './MissionsActions/MissionAction';
import profileReducer from './profile/profile';

const reducer = combineReducers({
  rockets: rocketReducer,
  mission: misssionReducer,
  profile: profileReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;
