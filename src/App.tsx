import React, { useEffect, useState } from "react";
import "./App.css";
import { RenderCondition } from "./RenderCondition";

function App() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('my counter -> ', counter)
  }, [counter])

  return (
    <div className="App">
      <button onClick={() => setCounter((prev) => prev = prev + 1)}>increment</button>

      <RenderCondition condition={true}>
        <p>{counter}</p>
      </RenderCondition>
      
      <RenderCondition condition={true} depArray={[counter]}>
        <p>{counter}</p>
      </RenderCondition>
    </div>
  );
}

export default App;
