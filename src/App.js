import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Guys my name is Charles!
        </p>
        <a
          className="App-link"
          href="https://de.linkedin.com/in/charles-heller-068b53233"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my LinkedIn Page.
        </a>
      </header>
    </div>
  );
}

export default App;
