import {Header, Bottom} from "./layout"

function App() {
  return (
    <div className="App app-grid">
      <Header />
      <Bottom />
      <div className="attribution">
        Challenge by 
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        > Frontend Mentor
        </a>
        . Coded by 
        <a href="https://www.djhwebdevelopment.com"> David Henery</a>.
      </div>
    </div>
  );
}

export default App;
