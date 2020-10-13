import React, { useState } from 'react';
import { useStateStorage } from './hooks/useStateStorage';
import './App.css';

function App() {
  const [value, setValue] =  useStateStorage('id');
  const [inputValue, setInputValue] = useState('');
  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>{value}</h1>
      <input type="text" onChange={handleInput}  />
      <button onClick={() => setValue(inputValue)}>update</button>
    </div>
  );
}

export default App;
