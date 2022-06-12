import React from 'react';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';
import { moviesList } from '../Data';
 


function Details (movies){
    const {id}=useParams();
    const movie=moviesList.find((movie)=>movie.id===id);
        return (
            <div>
             
             <h2> {movie.title}</h2>
             <img src={movie.photo} alt="photo"/>
             <h2> {movie.description}</h2>
                <h2> {movie.rating}</h2>
                <StarRating/>
                
            </div>
        );
   
}

export default Details;