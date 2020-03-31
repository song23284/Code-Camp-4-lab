import React, { Component } from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu


class Catagory extends Component {

  renderCatgory = ()=>(
       this.props.categoeies.map(x=>(
        <Menu.Item key={x.id} >
        <span>{x.name}</span>
        </Menu.Item >

      ))
      )

    render() {
        return (
            <Menu
            selectedKeys={[(this.props.selectid === null ) ? null:this.props.selectid.toString()]}
            onClick={(e)=>this.props.handlemenuclick(e.key)}
            >
               
            {this.renderCatgory()}
            </Menu>


        );
    }
}

export default Catagory;
