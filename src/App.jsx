import React from 'react';
import './App.css';
import Button from './components/Button';
import Clear from './components/Clear';
import Heading from './components/Heading';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  return (
    <>
    <div>
      <Heading />
    </div>
    <div>
    <Input />
    <Button />
    </div>
    <div>
      <Output />
      <Clear />
    </div>
    </>

  );
}

export default App;
