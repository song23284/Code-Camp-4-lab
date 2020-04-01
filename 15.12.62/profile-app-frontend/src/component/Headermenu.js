import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class Headermenu extends Component {

    handleclick  = (e)=>{
        console.log(e.key)
        localStorage.setItem('currentMenu',e.key)
    }
    render() {
        return (
            <Menu
             selectedKeys={[this.props.menuKey]}
             theme='dark'
             defaultOpenKeys={['sub1']}
             mode="horizontal"
             onClick={()=>{this.props.handleMenu()} }
             >
                 <Menu.Item key='login'>
                 <a href='/'>
                     <Icon type='login'/>
                     <span>login</span>
                     </a>
                 </Menu.Item>

                 <Menu.Item key='signup'>
                 <a href='/Signup'>
                     <Icon type='desktop'/>
                     <span>Signup</span>
                     </a>
                 </Menu.Item>

                 <Menu.Item key='changepassword'>
                 <a href='/ChangePassword'>
                 <Icon type='inbox'/>
                     <span>Change Password</span>
                 </a>
                 </Menu.Item>

                 <Menu.Item key='profile'>
                 <a href='/Profile'>
                     <Icon type='profile'/>
                     <span>Profile</span>
                     </a>
                 </Menu.Item>
             
             </Menu>
        );
    }
}

export default Headermenu;
