import "./App.css";
import RandomNumGenerator from "./components/RandomNumGenerator";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useEffect, useState } from "react";

function App() {
  const [random, setRandom] = useState(0);

  const generate = () => {
    setRandom(Math.floor(Math.random() * 20));
  };

  useEffect(() => {
    generate();
  }, []);
  return (
    <div className="App">
      <ErrorBoundary random={random} generate={generate}>
        <RandomNumGenerator generate={generate} random={random}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
