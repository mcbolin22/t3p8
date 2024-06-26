// this is ES6/ESM/module project import syntax
import MovieCard from "./MovieCard.jsx";

// CommonJS/NodeJS project import syntax:
// const MovieCard = require("./MovieCard.jsx")

let favouriteMovies = [
    "Aliens",
    " ",
    "Dune",
    "Anchorman",
    "",
    "Shrek 2",
    "Blade Runner",
    "Lord of the Rings"
];

export default function MovieList() {
    
    return (
        <section>
            {favouriteMovies.map((movie, index) => {
                // for React you must use === not ==
                // if (movie && movie.length === false) {

                // }

                // if (movie.length !== 0){
                //     return <MovieCard key={index + "-" + movie} bobsBurgers={movie}/>
                // }
                
                if (movie.length <= 1){
                    return null;
                } 
                
                return <MovieCard key={index + "-" + movie} bobsBurgers={movie}/>

            })}
        </section>
    )
}

// export function someFunction(){

// }

// module.exports = {SomeFunction} - regular node

// module.exports = MovieList; - same as export default

// import MovieList, {SomeFunction} from "thefile"