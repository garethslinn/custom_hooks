import { useState } from 'react';

const useStateStorage = (key, currentValue) => {
    const [state, setState] = useState(() => {
        const value = localStorage.getItem(key)
        if (value) {
          return JSON.parse(value);
        }
        return currentValue
    })
  
    const setStateStorage = value => {
      setState(value)
      localStorage.setItem(key, JSON.stringify(value))
    }
  
    return [state, setStateStorage ]
  }
  
  export { useStateStorage }


  // useage:
  // updates local state and saves in local storage
  //
  // const [value, setValue] =  useStateStorage('id');
  // const [inputValue, setInputValue] = useState('');
  // const handleInput = (e) => { setInputValue(e.target.value); }
  // 
  // <input type="text" onChange={handleInput}  />
  // <button onClick={() => setValue(inputValue)}>update</button>


