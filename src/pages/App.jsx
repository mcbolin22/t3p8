import logo from '../logo.svg';
import '../stylesheets/App.css';
import Navbar from '../Navbar';


let favouriteMovies = [
  "Aliens",
  "Dune",
  "Anchorman",
  "Shrek 2",
  "Blade Runner",
  "Lord of the Rings"
];

function App() {
  return (
    <div className="App">

      <Navbar />

      <header className="App-header">
        <h1>Hello World!</h1>
        <h1>Favourite Movies</h1>
        <ul>
          {favouriteMovies > 0 && favouriteMovies.map((movie, index) => {
            return <li key={movie + "-" + index}>
              {movie}
            </li>
          })}
        </ul>
        
        
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
      </header>
    </div>
  );
}

export default App;
