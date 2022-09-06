import { AppWrap } from "./layout";

function App() {
  return (
    <div className="App attrib">
      <AppWrap />
      <footer className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://www.djhwebdevelopment.com"> David Henery</a>.
      </footer>
    </div>
  );
}

export default App;
