import {useState} from 'react';
import Button from './Button';

function AddMovies({addMovies}) {
    const[movie,setMovies] =  useState({
        title:"",
        description:"",
        photo:"",
        rating:"",


    });
    const handlChange=(e)=>
    {setMovies(
        {
            ...movie,
            [e.target.name] : e.target.value,
                }
    )}
  
        return (
            <div>
                <input type="text"  onChange={handlChange} placeholder='title' name="title"/>
                <input type="text" onChange={handlChange} placeholder='description' name="description"/>
                <input type="text" onChange={handlChange} placeholder='photo' name="photo"/>
                <input type="text"   onChange={handlChange}  placeholder='rating' name="rating"/>
              
                <Button type="button"  onClick ={()=>addMovies(movie)} value="Add Movie"/>
            </div>
        );
    
}

export default AddMovies;
