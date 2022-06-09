
import './App.css';
import { moviesList } from './Data';
import {useState} from 'react';
import MovieList from './Pages/MovieList';
//import AddMovies from './Components/AddMovies';
import './Components/Card/Style.css';
import StarRating from './Components/StarRating';
import "./Components/StarRating.css";


function App() {
  const [movies, setMovies] = useState(moviesList);
  const addMovies=(movie)=>{setMovies([...movies,movie])};
  
 
  return (

    
    <div className="App">
      
      <center> <h1>  Films </h1></center>
      
      
     <MovieList   movies={movies}  addMovies={addMovies}/>
      {/* <StarRating/> */}
    
       <br/>
      
       
      
    </div>




  
  );
}

export default App;
