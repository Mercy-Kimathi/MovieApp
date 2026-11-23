import MovieCard from "../components/card";
import { useState, useEffect} from "react";
import "../css/home.css";
import { searchMovies, getPopularMovies } from "../services/api";
function Home(){
    const [searchmovie,setSearchmovie]=useState("") ;
    const [movies,setMovies]=useState([]);
    const[error, setError]=useState(null);
    const [loading, setloading]=useState(true);
    useEffect(()=>{
        const loadPopularmovies=async ()=>{
            try{
                const popularmovies= await getPopularMovies()
                setMovies(popularmovies)
            }
            catch(err){
                console.log(err)
                setError("failed to load movies ..")
            }
            finally {
                setloading(false)
            }
        }
        loadPopularmovies()
    },[])
    const Handlesearch= async (e)=>{
        e.preventDefault();//prevents the default when form is submitted
        if (!searchmovie.trim()) return;

        setloading(true);
        setError(null);
        try {
            setMovies(await searchMovies(searchmovie.trim()));
        } catch (err) {
            console.error(err);
            setError("Failed to search movies.");
        } finally {
            setloading(false);
        }
    } 
    return (
        <>
        <div className="home">
            <form onSubmit={Handlesearch} className="search-form">
                <input 
                type="text" 
                placeholder="search for a movie"
                className="search-input" 
                value={searchmovie}
                onChange={(e)=>setSearchmovie(e.target.value)}
                /> 

                <button 
                type="submit" className="search-button" 
                >
                    Search
                </button>
            </form>
            {loading && <p>Loading movies...</p>}
            {error && <p role="alert">{error}</p>}
            {!loading && !error && movies.length === 0 && <p>No movies found.</p>}
            <div className="movies-grid">
                {movies.map((movie)=>
                (
                    <MovieCard movie={movie} key={movie.id} />
                ) )} 
            </div>
        </div>
        </>
    );
};
export default Home;