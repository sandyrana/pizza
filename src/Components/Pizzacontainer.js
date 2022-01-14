import React, { Component } from 'react';
import Pizza from './Pizza';
import Cart from './Cart';


export default class Pizzacontainer extends Component {
    constructor(){
        super();
        this.state ={
            cart:[],
            products:[
                { id: 1, simg:"1.jpg",name: "Momo Mia Pizza-Veg flskj fsdlkj fsjlfs  flsdjfls fsdlj salkgj dslak gs", alt:"no", price:"100",tax:"5" },
        { id: 2, simg:"2.jpg",name: "Momo Mia Pizza-Veg",alt:"no", price:"200",tax:"12" },
        { id: 3, simg:"3.jpg",name: "Momo Mia Pizza-Veg",alt:"no" , price:"300",tax:"5"},
        { id: 4, simg:"4.jpg",name: "Momo Mia Pizza-Veg",alt:"no", price:"400",tax:"18" },
            ],

        }
    }
  
    addToCart = (val) => {
      //  console.log(val)
       
        this.setState({cart: [...this.state.cart, val]})
    }

    render() {
        //console.log(this.state.products)
        return (
            <div>
        
                <Pizza products ={this.state.products} addToCart={this.addToCart}/>
                <Cart cart={this.state.cart}/>
            </div>
        )
    }
}
