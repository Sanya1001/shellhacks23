import React from 'react';
import ChatInterface from './chatinterface';
import { SidebarScreen } from './AnimaPackage-React-Sidebar/src/screens/SidebarScreen/SidebarScreen';
import { Slide } from './AnimaPackage-React-Everything/src/screens/Slide/Slide';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IncluScript.ai</h1>
      </header>
      <main className="App-main">
       
        <ChatInterface />
        <Slide />
      </main>
    </div>
  );
}

export default App;
