import React, {  useState } from 'react'
import Dice from './components/Dice/Dice';
import Home from './components/Home/Home';

function App() {
  const [playerDetails, setPlayerDetails]= useState(null) // Stores the player details
  return (
    <div className="App">
      {/* Conditionally rendering the components. If playerDetails is null we render 'Home' else we render 'Dice' */}
      {playerDetails? <Dice playerDetails={playerDetails}/> 
      : <Home setPlayerDetails={setPlayerDetails} playerDetails={playerDetails}/>}
    </div>
  );
}

export default App;
