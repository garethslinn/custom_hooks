import React, { useState } from 'react';
import { useStateStorage } from './hooks/useStateStorage';
import useToggle from './hooks/useToggle';
import './App.css';

function App() {
  const [value, setValue] =  useStateStorage('id');
  const [inputValue, setInputValue] = useState('');
  const [isVisble, toggle] = useToggle(false);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <h1>{value}</h1>
        <input type="text" onChange={handleInput}  />
        <button onClick={() => setValue(inputValue)}>update</button>
      </div>
      <div>
        <button onClick={toggle}>{isVisble ? "Close" : "Open"}</button>
        { isVisble && <div>Element</div> }
      </div>
    </div>
  );
}

export default App;
