import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

function App() {
  const makeApiRequest = () => {
    axios.get(`${apiUrl}/user`).then((response) => {
        console.log(response)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        <br /><button onClick={makeApiRequest} style={{background:'#61dafb'}}>Make a Request</button>
      </header>
    </div>
  );
}

export default App;
