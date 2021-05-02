import logo from './logo.png';
import comingsoon from './comingsoon.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div  className="App-logo"><img src={logo} className="App-logo-img"  alt="logo" /></div>
        <div><img src={comingsoon} className="comingsoon" alt="coming_soon" /></div>
        {/* <img src={comingsoon} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
