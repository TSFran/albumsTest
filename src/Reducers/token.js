import { FETCH_TOKEN_REQUEST, FETCH_TOKEN_FAILURE, FETCH_TOKEN_SUCCESS } from '../Constants/actionTypes';

const initialStateToken = {
  data: ''
}

export const Token = (state=initialStateToken, action) => {
  switch(action.type) {
    case FETCH_TOKEN_REQUEST: 
      return {
        ...state,
        data: 'Token cargando'
      }
    case FETCH_TOKEN_FAILURE: 
      return {
        ...state,
        data: 'No hay token'
      }
    case FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}