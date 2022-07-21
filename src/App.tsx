import React from 'react';
import './App.css';
import { useCounterStore } from './storage/counter.store';
import { SectionList } from './components/molecules/SectionList';

export const App = () => {
  const [value, setValue, isPersistent, error] = useCounterStore();
  return (
    <div className="App">
      <button
        onClick={() => {
          setValue((prev: number) => prev + 1);
        }}
      >
        Increment in Chrome sync Storage {value}
      </button>
      <SectionList />
    </div>
  );
};
