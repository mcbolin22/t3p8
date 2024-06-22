// import MovieList from "../components/MovieList";
import "../stylesheets/App.css";

function App2(props) {
    return (
        <div className="App2">
            <h1>Favourite Movies</h1>

            {/* <MovieList /> */}
            {props.children}


        </div>
    );
}

export default App2;