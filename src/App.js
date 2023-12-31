
import './App.css';
import Activity from './components/activity';
import Cover from './components/cover';
import Menu from './components/menu';
import React from 'react';
import { ReactDOM } from 'react';

export default function App() {
  return (
    <div className="App">
      <div className='main'>
        <Cover/>
        <Menu/>
        <Activity/>
      </div>
    </div>
  );
}

