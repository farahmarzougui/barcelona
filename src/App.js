
import './App.css';
import React from "react";
import PlayersList from "./comp/playerlist";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className='okay'>Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;