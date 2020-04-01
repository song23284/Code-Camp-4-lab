import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'antd';


class Signup extends Component {
    componentDidMount = ()=>{
        localStorage.setItem('currentMenu','signup')
    }
    render() {
        return (
            <Row style={{height:'100vh'}} type='flex' justify='center'>
                <Col xs={24} sm={24} md={18} lg={14} >
                <Row span={24} style={{margin:'10px'}} type='flex' justify='center'><img width='200px' src='fb_icon.png'></img> </Row>
                <Row  style={{width:'40%',marginLeft:'30%'}}  >
                    <Col>Email
                    <Input placeholder="Email" />
                    </Col>
                    <Col>Password
                    <Input type='password' placeholder="Password" />
                    
                    </Col>
                    <Col>Confirm Password
                    <Input placeholder="Confirm Password" />
                    </Col>
                    <Col>Name:
                    <Input placeholder="Name:" />
                    </Col>

                </Row>
                <Row style={{margin:'10px'}} type='flex' justify='center'> <Button type="default">SignUp</Button>
                </Row>
                </Col>

            </Row>
        );
    }
}

export default Signup;
