
import './App.css';
import { moviesList } from './Data';
import {useState} from 'react';
import MovieList from './Pages/MovieList';
//import AddMovies from './Components/AddMovies';
import './Components/Card/Style.css';
// import StarRating from './Components/StarRating';
import "./Components/StarRating.css";
import NavBar from './Components/NavBar';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Details from './Components/Details';



function App() {
  const [movies, setMovies] = useState(moviesList);
  const addMovies=(movie)=>{setMovies([...movies,movie])};
  
 
  return (

    
    <div className="App">
{/*       
      <center> <h1>  Films </h1></center> */}
      
     <Router>
     <NavBar />
       <Routes>
         
         <Route path="/" element={<Home/>} />
         <Route path="/MovieList" element ={
           <MovieList   movies={movies} 
            addMovies={addMovies}
            />
         } 
         />
         <Route 
         path="/moviesList/details/:id"  
         element={<Details movies={movies}/>}
         />
       </Routes>
     </Router>
   
    
       <br/>
      
       
      
    </div>




  
  );
}

export default App;
