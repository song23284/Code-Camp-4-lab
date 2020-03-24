import React from 'react';
import { Row, Col, Input, Button,Checkbox,Form } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';





class LoginPage extends React.Component {

    render = () => {
      
        return (
          <Row   justify='center' type='flex'  align='middle'>
            <Col  span={8} style={{marginRight:'75px'}}  >
              <Row style={{height:'100vh'}} type='flex' justify='end' align='middle' >
              <img style={{width:'100%' ,maxWidth:'250px'}} src='https://www.facebook.com/images/fb_icon_325x325.png'></img>
              </Row>
            </Col>
            <Col style={{height:'100vh'}}  span={8}>
              <Row style={{height:'100vh'}} justify="center" type='flex' align='middle'>
                <Col>
             <Row>username <Input></Input></Row>
             <Row>password<Input></Input></Row>
             <Row type='flex' justify='space-around'>
               <Col span={12} > <Button>Sign-up</Button></Col>
               <Col span={12}><Button>Login</Button></Col>
             </Row>
             </Col>
             </Row>
            
            </Col>

          </Row>

            
        )
    }

}

export default LoginPage;