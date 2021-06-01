import logo from "./logo.svg";
import "./App.css";

function App() {
  const dar = "blah";
  return (
    <div className="App">
      <h1>The Env is :</h1>
      <h1>{process.env.REACT_APP_KEY}</h1>
    </div>
  );
}

export default App;
