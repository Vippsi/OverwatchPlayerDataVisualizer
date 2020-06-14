import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerForm from './components/PlayerForm'
import PlayerList from './components/PlayerList'

function App() {
  return (
    <div className="App">
      <PlayerForm/>
      <PlayerList/>
    </div>
  );
}

export default App;
