import React, { Component } from 'react';
import { Col,Row } from "antd";
import Products from './Products';
class Product extends Component {



    renderproduct = ()=> (

      this.props.produces.map(x=>(
          <Col>
            <Products img={x.image} name={x.name} description={x.description}/>
          </Col>
      ))
    )
    render() {
        return (
            <Row>
                {this.renderproduct()}

            </Row>
        );
    }
}

export default Product;
