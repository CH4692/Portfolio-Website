import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Connection to Hostinger was success. YEAH!!!
        </p>
        <a
          className="App-link"
          href="https://de.linkedin.com/in/charles-heller-068b53233"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get to know me
        </a>
      </header>
    </div>
  );
}

export default App;
