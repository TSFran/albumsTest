import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAdzQvfySGKxW-bFpi2KMnqYHK5BHhkvSE',
  authDomain: 'albums-test-react.firebaseapp.com',
  databaseURL: 'https://albums-test-react.firebaseio.com',
  projectId: 'albums-test-react',
  storageBucket: 'albums-test-react.appspot.com',
  messagingSenderId: '148538828305'
};

firebase.initializeApp(config);

export default firebase;