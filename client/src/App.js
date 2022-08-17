import React from "react";
import "./App.css";
import Quiz from "./Quiz";

function App() {
  const [start, setData] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {start == 0 ? <h1 onClick={() => setData(1)}>Start</h1> : <Quiz />}
      </header>
    </div>
  );

}

export default App;
