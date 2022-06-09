import React from 'react';
import Card from './Card';

function CardList ({list }){
    
        return (
            <div>
             
                {list.map((item)=>(<Card item={item}/>))}
                
            </div>
        );
   
}

export default CardList;
