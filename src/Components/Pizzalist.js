import React, { Component } from 'react';
import Button from '@mui/material/Button';



export default class Pizzalist extends Component {
    constructor(props){
      //  console.log(props)
        super(props);
        this.state ={

        }
    }

    
    render() {
        return (
            <div className='Pizzadata'>
            <img src={this.props.val.simg} alt={this.props.val.alt}></img>
            <h4>{this.props.val.name}</h4>
            <Button variant="contained" onClick={()=>this.props.addToCart(this.props.val)} >Add &#8377;{this.props.val.price}</Button>
        </div>
        )
    }
}
