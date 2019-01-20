import { FETCH_TOKEN_REQUEST, FETCH_TOKEN_FAILURE, FETCH_TOKEN_SUCCESS } from '../Constants/actionTypes';
import firebase from '../initializers/firebase';

const fetchTokenRequest = () => ({
  type: FETCH_TOKEN_REQUEST
});

const fetchTokenFailure = () => ({
  type: FETCH_TOKEN_FAILURE
});

const fetchTokenSuccess = (data) => ({
  type: FETCH_TOKEN_SUCCESS,
  data,
});

export const fetchToken = () => {
  return (dispatch) => {
    dispatch(fetchTokenRequest())
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
    firebase.auth().signInWithPopup(provider).then(({result}) => {
      let token = result.credential.accessToken;
      dispatch(fetchTokenSuccess(token));
    })
    .catch(err => {
      dispatch(fetchTokenFailure());
    })
  }
}