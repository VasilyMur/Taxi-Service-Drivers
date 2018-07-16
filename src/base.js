import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB39n_JmtqSW7zZhCUfUcARgyP_3esueFg",
    authDomain: "invoices-list.firebaseapp.com",
    databaseURL: "https://invoices-list.firebaseio.com",
})


const base = Rebase.createClass(firebaseApp.database());
  // This is a named export
  export { firebaseApp };

  // This is a default export;
  export default base;