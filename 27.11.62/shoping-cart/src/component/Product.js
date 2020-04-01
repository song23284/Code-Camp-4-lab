import React, { Component } from 'react';
import { Col,Row } from "antd";
import Products from './Products';
class Product extends Component {



    renderproduct = ()=> (

      this.props.produces.map(product=>(
          <Col>
            <Products handleclickaddtocard={this.props.handleclickaddtocard} productDetail={product} />
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
