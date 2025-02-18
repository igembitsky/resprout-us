import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { app, analytics } from './config/firebase';

function App() {
  useEffect(() => {
    console.log('Firebase initialized: ', !!app);
    console.log('Analytics initialized: ', !!analytics);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;