import logo from "./logo.png";
import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
     <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>This project was coded by{""}</small>
           <a href="https:/elletamcdaniel.com" 
          target="_blank" rel="noreferrer">
            Elleta Michell Moire McDaniel
          </a>
          <a href="https://github.com/emcdanie"
            target="_blank" rel="noreferrer">Open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
} 

export default App;
