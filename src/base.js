import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCVmObQyJGENYLUC2czzmuf1GjY0sma4A8",
    authDomain: "chatbox-app-7cfab.firebaseapp.com",
    databaseURL: "https://chatbox-app-7cfab.firebaseio.com",
}) //Initializtion de la bdd

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base