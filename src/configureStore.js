import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rocketReducer } from './RocketActions/RocketAction';

const reducer = combineReducers({
  rockets: rocketReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;
