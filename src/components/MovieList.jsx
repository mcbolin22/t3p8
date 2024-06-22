let favouriteMovies = [
    "Aliens",
    "Dune",
    "Anchorman",
    "Shrek 2",
    "Blade Runner",
    "Lord of the Rings"
];

export default function MovieList() {
    
    return (
        <section>
            {favouriteMovies.map((movie, index) => {
                return <MovieCard key={index} bobsBurgers={movie}/>

            })}
        </section>
    )
}

// export function someFunction(){

// }

// module.exports = {SomeFunction} - regular node

// module.exports = MovieList; - same as export default

// import MovieList, {SomeFunction} from "thefile"