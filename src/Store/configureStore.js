import { createStore, combineReducers } from 'redux';
import { Token } from '../Reducers/token'

export default () => {
  const store = createStore(
    combineReducers({
      Token,
    })
  );
  return store;
}