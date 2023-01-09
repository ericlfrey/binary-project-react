import React from 'react'
import { useState } from 'react';
import Output from './Output';

export default function Form() {
  const [inputVal, setInputVal] = useState('');
  const [show, setShow] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  }
  const handleClearForm = () => {
    setShow(!show);
    setInputVal('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" value={inputVal} onChange={e => setInputVal(e.target.value)} autoFocus />
        <button type='submit'>Submit</button>
      </form>
      {show ? <Output initialVal={inputVal} /> : null}
      {show ? <button onClick={handleClearForm}>Clear Form</button> : null}

    </>
  )
}
