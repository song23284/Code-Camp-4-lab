import React, { Component } from 'react';
import { Row, Col, Button, Input } from 'antd';

class Login extends Component {
    componentDidMount = ()=>{
        localStorage.setItem('currentMenu','login')
    }
    render() {
        return (
            <Row style={{  height: '100%' }} type='flex' justify='center' align='middle'>
                <Col style={{ width: 'min-content' }}><img height='250px' src="fb_icon.png"></img> </Col>
                <Col style={{ width: 'max-content',marginLeft:'20px' }}>
                    <Row>Username 
                        <Input placeholder="Username" />
            
                    </Row>
                    <Row>Password
                    <Input type='Password' placeholder="Password" />

                    </Row>
                    <Row type='flex' justify='center'>
                        <Col><Button style={{margin:'5px'}} type="link">Sign Up</Button></Col>
                        <Col><Button style={{margin:'5px'}} type="primary">Login</Button></Col>
                    </Row>

                </Col>
            </Row>
        );
    }
}

export default Login;
