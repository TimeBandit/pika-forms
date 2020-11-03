import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useLoadData from "./hooks/useLoadData";

function App() {
  const data = useLoadData() as { pages?: any[]; title?: string };
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>{data.pages && data.pages.map((page, index) => <li key={index}>{page.type}</li>)}</ul>
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

export default App;
