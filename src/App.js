<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
=======
import React from 'react';

>>>>>>> bb3b85818112624903647cc7efb2e00ff9edaa28
import { Slide } from './AnimaPackage-React-SecondEverything/src/screens/Slide/Slide';
import './App.css';


function App() {
  const [text, setText] = useState('Initial Text');

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the text variable with a new value
      setText('New Text: ' + new Date().toLocaleTimeString());
    }, 2000); // Update every 2 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <div className="App">
      <ParticlesBackground/>
      <header className="App-header">
        <h1>IncluScript.ai</h1>
      </header>
      <main className="App-main"> 
<<<<<<< HEAD
        <Slide /> 
      </main>
      <div>
        <h1>{text}</h1> {/* Display the value of the 'text' state variable */}
      </div>
=======
      <Slide /> 

      </main>
>>>>>>> bb3b85818112624903647cc7efb2e00ff9edaa28
    </div>
  );
}

export default App;
