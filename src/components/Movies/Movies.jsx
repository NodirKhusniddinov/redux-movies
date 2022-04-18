import "./movies.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieId } from "../../redux/actions/movieAction";
import {ReactComponent as Play} from './assets/image/Play.svg'
function Movies(){
 const [movies, setMovies] = useState([]);
 const [banner, setBanner] = useState([]);
 const dispatch = useDispatch();

 const getMovies = () => {
   axios
     .get(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies`)
     .then((res) => {
       setMovies(res.data.filter((item) => item.type !== "banner"));
       setBanner(res.data.filter((item) => item.type === "banner"));
     });
 };

 useEffect(() => {
   getMovies();
 }, []);

 return <div className="movies">
   <div className="banner">
        <img  src={banner[0]?.movieImageUrl} alt='banner' />
        </div>
        <h1 className="main_text">Continue watching | {movies.length} movies</h1>
        <div className="movies_list">
        {movies.map((movie) => { 
           return <div className="film" 
           key={movie?.id}
              onClick={() => {
                dispatch(getMovieId(+movie?.id));
              }}> 
              <img
                key={movie?.id}
                src={movie?.movieImageUrl}
                alt={movie?.title}
              />
              <div className="info">
                <Play/>
                <div className="title">
                  <p>{movie?.title}</p>
                  <p className="date">{movie?.release_date}</p>
                </div>
                <div className="duration">{movie?.duration}</div>
                </div>
           </div>
        })}
        </div>
        </div>
}
 export {Movies}