import React,{useEffect,useState} from 'react'
import "../RowComponents/Row.css"
import axios from "../axios/axios"
function Row({title, fetchUrl, isLargeRow=false}) {

  const [movie, setmovie] = useState([]);

 const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
async function fetchData(){
    const request = await axios.get(fetchUrl);
    setmovie(request.data.results);
    return request;
}
   fetchData();
  }, [fetchUrl])

  console.log(movie);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">

            {movie.map(
                (movie)=>
                
                ((isLargeRow && movie.poster_path)||(!isLargeRow && movie.backdrop_path))&&(
                    <img 
                    className={`row__poster ${isLargeRow && "row__posterLage"}`} 
                    key={movie.id}    
                    src={`${base_url}${
                    isLargeRow ? movie.poster_path: movie.backdrop_path
                    }`} alt={movie.name}/>
                )
               
            )}
            </div>
           
        </div>
    )
}

export default Row
