import React, { Component } from 'react';
import { Card,Button} from 'antd';
import Product from './Product';
const { Meta } = Card;


class Products extends Component {

  render() {
    const product = this.props.productDetail
    return (
      <Card 
        hoverable
        style={{ width: 240, margin: '10px' }}
        cover={<img width='100%' height='200px' src={product.image} />}

      > <h4 style={{ height: '100%', overflowY: 'hidden' }}>{product.name}</h4>
        <Meta style={{ height: '250px', overflowY: 'hidden' }} description={product.description} />
        <Button onClick={()=>this.props.handleclickaddtocard(product)} type="default">Add tocart </Button>
        
      </Card>

    );
  }
}

export default Products;
