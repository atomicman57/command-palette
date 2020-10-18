import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommandPalette from '../src/components/CommandPalette'

function App() {
  return (
    <div className="App">
      <CommandPalette headerName="Lead Name Test Company" />
    </div>
  );
}

export default App;
