import './App.css';
//import PersonTable from './components/PersonTable'
import PersonTable from './components/PersonTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Person table application
        </h1>
        <p>by Joonas Uusnäkki</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/joonas-uusn%C3%A4kki-82300a198/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get to know my professional me!
        </a>
        <br />
        <PersonTable />
      </header>
    </div>
  );
}

export default App;
