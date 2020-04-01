import React, { Component } from 'react';
import { Row, Col, Button, Input,Menu } from 'antd';

class ChangePassword extends Component {
    componentDidMount = ()=>{
        localStorage.setItem('currentMenu','changepassword')
    }
    render() {
        return (
            <Row style={{height:'100%'}} type='flex' justify='center' align='middle'> 
             
             
            <Col >
            <Row>
                <Col>
                <Row>Old password:
                <Input placeholder="Old password" />
                </Row>
                <Row>New password:
                <Input type='password' placeholder="New password" />
                </Row>
                <Row>Confirm New password</Row>
                <Input type='password' placeholder="Confirm New password" />
                </Col>
            </Row>
            <Row style={{marginTop:'10px'}} type='flex' justify='center'><Button type="primary"> Change Password</Button> </Row>

            </Col>
            </Row>
        );
    }
}

export default ChangePassword;
