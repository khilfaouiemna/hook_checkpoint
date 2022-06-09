import React from 'react';
import './Card/Style.css';

function Button({value , type , onClick}) {
   
        return (
            <div>
                <button type={type} onClick={onClick} > 
                 {value}
                </button> 
            </div>
        ); 
    
}

export default Button;
