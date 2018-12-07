import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB7HyOvm_Yr5WykfI_9GjDK7ReO15aPEG8",
    authDomain: "homework6-jfddl6-pietron.firebaseapp.com",
    databaseURL: "https://homework6-jfddl6-pietron.firebaseio.com",
    projectId: "homework6-jfddl6-pietron",
    storageBucket: "homework6-jfddl6-pietron.appspot.com",
    messagingSenderId: "1032899703801"
};
firebase.initializeApp(config);
export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()