import React from "react";
import ReactDOM from "react-dom";


import MainQuiz from "./components/MainQuiz";

function App() {
  return (
    <div>
      <MainQuiz />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
