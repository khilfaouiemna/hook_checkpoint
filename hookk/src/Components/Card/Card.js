import React from 'react';
import Button from '../Button';
import './Style.css';
import StarRating from "../StarRating.js";
function Card ({item }) {
  
        return (
     <section>
     <div class="card">
    <div class="card-header"></div>
    <div class="card-body">
                <br/>
                <br/>
            <h2> {item.title}</h2>
             <img src={item.photo} alt="photo"/>
             <h2> {item.description}</h2>
                <h2> {item.rating}</h2>
               
                <StarRating/>
                <Button type="button" value="Details" />
            
            </div> 
    
  </div>
  </section>    
        );
        }

export default Card;
