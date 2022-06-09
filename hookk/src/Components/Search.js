import React  from 'react';
import './Search.css';

function Search ({setSearch}) {
   const handleChange = (e)=>{
       setSearch(e.target.value);
   };
  
        return (
            
            <div classNAme="searchBar">
                <input type="text" placeholder='search' onChange={handleChange} id='searchBar' name='searchBar'></input>
            </div>
           
        );
    
}

export default Search;