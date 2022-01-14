import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Pizzalist from './Pizzalist';


function Pizza({products,addToCart}){
   
// console.log(products)
   

    return(
        <div className='Pizza'>
     
       {products.map((val,index) => (
            <React.Fragment key={index}>
                <Pizzalist val={val} addToCart={addToCart}/>
            </React.Fragment>
        
      ))}  
    
    </div>
    )

}
export default Pizza;