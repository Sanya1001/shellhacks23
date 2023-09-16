import React from 'react';
import ChatInterface from './chatinterface';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ChatGPT</h1>
      </header>
      <main className="App-main">
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;
