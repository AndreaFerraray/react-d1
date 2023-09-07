import logo from "./logo.svg";
import "./App.css";
import MyButton from "./component/button";
import Header from "./component/Header";
import Img from "./component/Img.";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Header textProps={"PROVAAAA"} />
        <MyButton textButton="ciao carisimmo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Img src="https://www.focus.it/images/2021/11/23/mare_1020x680.jpg" alt="mare" />
    </div>
  );
}

export default App;
