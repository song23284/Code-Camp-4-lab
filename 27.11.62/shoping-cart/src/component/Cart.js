import React, { Component } from 'react';
import { Row, Col, Table,Button } from 'antd';



class Cart extends Component {


    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'product.name',
            },
            {
                title: 'Price',
                dataIndex: 'product.price',
            }
            ,
            {
                title: 'Amout',
                dataIndex: 'amount'
            },{
                title:'Action',
                dataIndex:'',
                render:(text,cartItem)=><Button onClick={()=>this.props.handledelete(cartItem.uid)} type="default">Delete</Button>
                
            }


        ];
        const { cart } = this.props
              let  array = cart
        return (
           
            <div>
                <Table

                    columns={columns}
                    dataSource={cart}
                    bordered

                />
               
                    
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
                </div>
            
        );
    }
}

export default Cart;
