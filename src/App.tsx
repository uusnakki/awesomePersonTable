import './App.css';
//import PersonTable from './components/PersonTable'
import PersonCreator from './components/PersonCreator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Table application
        </h1>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/joonas-uusn%C3%A4kki-82300a198/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get to know my professional me!
        </a>
        <br />
        <PersonCreator />
      </header>
    </div>
  );
}

export default App;
