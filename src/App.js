import React from "react";

function Movie({ name }) {
  return <h1>I like {name}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Movie name="dd"/>
    </div>
  );
}

export default App;
