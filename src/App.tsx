import React from 'react';
import './App.css'
import RandomNumGenerator from "./components/RandomNumberGenerator";
import { ErrorBoundary } from './components/ErrorBoundary';
import { useEffect, useState } from "react";

function App() {
  const [random, setRandom] = useState(0);

  const generate:()=>void = () => {
    setRandom(Math.floor(Math.random() * 20));
  };

  useEffect(() => {
    generate();
  }, []);
  return (
    <div className="App p-3 mx-auto my-3 d-flex flex-column justify-content-between align-items-center">
      <ErrorBoundary random={random} generate={generate}>
        <RandomNumGenerator generate={generate} random={random}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
