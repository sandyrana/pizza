import React from 'react';
import './App.css';
import Header from './Components/Header';
import {Route,Routes} from "react-router-dom";
import Deals from './Components/Deals';
import Pizza from './Components/Pizza';
import Nofound from './Components/Nofound';
import Cart from './Components/Cart'
import Pizzacontainer from './Components/Pizzacontainer';


function App() {
  return (
   <React.Fragment>
   <Header />
  

            
                    <Routes>
                    <Route path="/" element={<Pizzacontainer />}></Route>
                    <Route path="/Pizza" element={<Pizzacontainer />}></Route>
                    <Route path="/Deals" element={<Deals />}></Route>       
                    <Route path="/*" element={<Nofound />}></Route>
                    </Routes>
             
              
  
     
    
  
   </React.Fragment>
  );
}

export default App;
