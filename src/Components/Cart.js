import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props){
        
        super(props);
        this.state ={
           Totalprice:'', 

        }
    }

   
    
    removeFromCart = (val) => {      
       
        
        
    }
  
        total = this.props.cart.reduce((mapped, item) => (
            
         console.log(item.price)
             
          ),0)
         
    
    render() {
       
        
        return(
          <React.Fragment>
            {this.props.cart.length > 0 ?
                <div className='cart'>
              
                  <h4>Total item: {this.props.cart.length}</h4><hr></hr>
                  {this.props.cart.map((val,index) => (
                                <React.Fragment key={index}>
                                <div className='cartitem'>
                                                <img src={val.simg} alt={val.alt}></img>
                                                <div>
                                                    <h4>{val.name}</h4>
                                                    <p>&#8377; {val.price}</p>
                                                </div>
                                            
                                                <button onClick={() => this.removeFromCart(val)}>
                                                Remove
                                                </button>
                        
                                            </div><hr></hr>
                                           
                                </React.Fragment>
                    ))}  
                     <h1>Total Amount:</h1>
                </div>

                : <div className='cart'><h2>No item Found</h2></div>
          }
        </React.Fragment>
      
        )
       
       
    }
}
