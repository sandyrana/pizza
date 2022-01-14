import React,{Component} from "react";
import {Link} from "react-router-dom";



export default class Header extends Component {
    render() {
        return (
           <div className='App-header'>
               <div>
                    <ul>
                    <Link to="/Pizza"><li>Pizza</li></Link>
                    <Link to="/Deals"><li>Deals</li></Link>                    
                    <Link to="/Desserts"><li>Desserts</li></Link>               
                  
                        
                    </ul>
               </div>

               <div>
                    <ul>
                      
                     <li> <img src="shopping-cart.png" alt="cart"></img></li>
                       
                    <Link to="/SignIn"><li>SignIn</li></Link>

                    </ul>
               </div>
           </div>
        )
    }
}
