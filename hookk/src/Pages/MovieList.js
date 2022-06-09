import {useState}  from 'react';
import React from 'react';
import AddMovies from '../Components/AddMovies';
import CardList from '../Components/Card/CardList';
import Search from '../Components/Search';


 function  MovieList ({movies , addMovies }) {
    const [search,setSearch] = useState("");
    const filteredMovies = movies.filter(
        (movie)=>movie.title.toLowerCase().includes(search.toLowerCase()  )
    );
    const filteredMoviess = movies.filter(
        (movie)=>movie.rating.toLowerCase().includes(search.toLowerCase() )
    );
        return (
            <div>
                       <Search setSearch={setSearch}/>
                <CardList   list={filteredMovies}  />
           
                <AddMovies addMovies={addMovies}/>
         
                
            </div>
        );
    
}

export default MovieList;
