import React from 'react';
import { Row, Col, Button, Input } from 'antd'




function Singup() {
    return (
        <Row type='flex' justify='center' align='middle' >
            <Col    md={24}>
                <Row type='flex' justify='center' >
                <img style={{ maxWidth:'150px'}} src='https://www.facebook.com/images/fb_icon_325x325.png'></img>
                </Row>
            </Col>
            <Col span={16}>
                <Row spane={10} justify='center' type='flex'>
                    <Col> 
                <Row>Username <Input></Input></Row>
                <Row>Password<Input></Input></Row>
                <Row>Confirm Password<Input></Input></Row>
                <Row>Name<Input></Input></Row>
                <Row justify='center' type='flex' style={{marginTop:'20px'}} ><Button>Sing-up</Button></Row>
                </Col>
                </Row>
            </Col>
        </Row>
    )
}


export default Singup;

import React, { Component } from 'react';

class Singup extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Singup;

