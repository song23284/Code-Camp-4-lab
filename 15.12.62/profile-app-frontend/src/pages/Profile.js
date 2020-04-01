import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'antd';

class Profile extends Component {

    componentDidMount = ()=>{
        localStorage.setItem('currentMenu','profile')
    }
    render() {
        return (
            <Row style={{height:'100vh'}} type='flex' justify='center'>
             

            </Row>
        );
    }
}

export default Profile;
