import React, { Component } from 'react';
import { Row, Col, Table, Button, Statistic } from 'antd';



class Cart extends Component {


    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Price',
                dataIndex: 'price',
            }
            ,
            {
                title: 'Amout',
                dataIndex: 'amount'
            }, {
                title: 'Action',
                dataIndex: '',
                render: (text, cartItem) => <Button onClick={() => this.props.handledelete(cartItem.uid)} type="default">Delete</Button>

            }


        ];
       
           

        const { cart } = this.props
        let x = cart.map(x => x.product)
        x.concat(cart)
        console.log(x)

         
        let total = 0;
        
        for (let item of cart){
            // total += item.amout * x.price
        }

        return (

            <Row justify='center' type='flex'>
                <Col>
                    <Row justify='center' type='flex' >
                        <Table

                            columns={columns}
                            dataSource={x}
                            bordered

                        />

                      <Row span={16}>
                        <table >
                            <th >
                                <td >name</td>
                                <td >price</td>
                                <td >id</td>

                            </th>
                            {cart.map(x => (

                                <tr>

                                    <td >{x.product.name}</td>
                                    <td >{x.product.price}</td>
                                    <td >{x.uid}</td>
                                    <td >{x.amount}</td>


                                </tr>

                            ))}
                        </table>
                        </Row>
                        <Statistic title='totl price ' value={total} precision={2} />
                        <Button style={{ marginTop: 16 }} type="primary">Check out</Button>
                    </Row>
                </Col>
            </Row>

        );
    }
}

export default Cart;
