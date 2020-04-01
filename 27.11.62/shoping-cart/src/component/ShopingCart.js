import React, { Component } from 'react';
import Catagory from './Catagory';
import Product from './Product';
import Cart from './Cart';
import {Row,Col  } from 'antd';
import { uniqueId} from "lodash";
import axios from 'axios';
class ShopingCart extends Component {
   state={
     categoeies:[] ,
  produces:[],
  selectid:null,
  cart:[]
   }

   componentDidMount = async ()=>{
      const resultcategory   =await axios.get('http://localhost:3030/product-category')
      const resultproduct   =await axios.get('http://localhost:3030/product')

      
      this.setState(state =>({
        categoeies:resultcategory.data,
        produces:resultproduct.data,
        selectid:resultcategory.data[0].id

      }))
    
   }

   fillterProduct = ()=> {
      const id = this.state.selectid

        if (!id){
          return []
        }else{
          return this.state.produces.filter(produces =>(

            produces.ProductCategoryId ==id
          ))
        }
   }

   handlemenuclick=(id) => {
     
    this.setState({selectid:id})
  }

  handleclickaddtocard=(product)=>{
     if(this.state.cart.find(cartItem=> cartItem.product.id === product.id)){
       this.setState({
         cart:this.state.cart.map(cartItem =>
           cartItem.product.id === product.id ? {...cartItem,amount:cartItem.amount +1} : cartItem 
           
         )
       })
     }else{
       this.setState({cart:[...this.state.cart,{uid:uniqueId(),product,amount:1}]
      })
     }
  }

  handledelete= (uid)=>{
    this.setState({cart:this.state.cart.filter(cartItem => cartItem.uid !== uid)})

  }
  render() {
    return (
      <Row type='flex' justify='space-around' span={24} >
        <Col span={3}> <Catagory selectid={this.state.selectid }  categoeies={this.state.categoeies} handlemenuclick={this.handlemenuclick} /></Col>
        <Col span={14}> <Product handleclickaddtocard={this.handleclickaddtocard} produces={this.fillterProduct()}/></Col>
        <Col span={6}> <Cart handledelete={this.handledelete} cart={ this.state.cart}    /></Col>
      </Row>
    );
  }
}

export default ShopingCart;
