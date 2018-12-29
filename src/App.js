import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList.js';
import * as firebase from 'firebase';
var config = {
   apiKey: "AIzaSyC4mPskU_RCZNSS5-gZ-OriYAMhzwLvUFI",
   authDomain: "react-chatrooms.firebaseapp.com",
   databaseURL: "https://react-chatrooms.firebaseio.com",
   projectId: "react-chatrooms",
   storageBucket: "react-chatrooms.appspot.com",
   messagingSenderId: "506695874824"
 };
 firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
