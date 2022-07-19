import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useCounterStore } from './storage/counter.store';

export const App = () => {
  const [value, setValue, isPersistent, error] = useCounterStore();
  return (
    <div className="App">
      <header className="App-header">
        <button
            onClick={() => {
              setValue((prev: number) => (prev + 1));
            }}
        >
          Increment in Chrome sync Storage {value}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
