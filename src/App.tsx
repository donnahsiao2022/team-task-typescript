import { useState, useEffect } from 'react';
import axios from 'axios';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Input from './components/Input.tsx';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    (async () => {
      console.log(process.env.REACT_APP_API_BASE_URL);
      const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}`);
      console.log(result);
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{text}</p>
      <Input id="SanpleText" text="這是一個 input" value={text} onChangeHandler={onChangeHandler} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
