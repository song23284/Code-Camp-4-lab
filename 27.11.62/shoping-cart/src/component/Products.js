import React, { Component } from 'react';
import { Card } from 'antd';
const { Meta } = Card;


class Products extends Component {
    render() {
        return (
            <Card
    hoverable
    style={{ width: 240 , margin: '10px' }}
    cover={<img width='100%'  height='200px'   src={this.props.img} />}

  > <h4 style={{height:'100%',overflowY:'hidden'}}>{this.props.name}</h4>
    <Meta style={{height:'250px',overflowY:'hidden'}}  description={this.props.description} />
  </Card>
            
        );
    }
}

export default Products;
