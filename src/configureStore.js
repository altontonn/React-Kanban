import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { misssionReducer } from './MissionsActions/MissionAction';

const rootReducer = { mission: misssionReducer };

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
console.log(store);

export default store;
