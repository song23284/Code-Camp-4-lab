import React from 'react';
import { Menu, Row, Col, Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import Todolistapp from './pages/Todolistapp';
import Slide from './pages/Slide';
const { Header, Content } = Layout

function App() {
  return (
   
     
        <Layout>
          <Header>

          <Menu mode='horizontal' theme='dark'>
          <Menu.Item><a href='/todoapp'>todoapp</a></Menu.Item>
          <Menu.Item><a href='/slide'>slide</a></Menu.Item>
        </Menu>

          </Header>

          <Content style={{height:'100vh'}}>
            <Switch>
              <Route exact path='/todoapp' component={Todolistapp} />
              <Route exact path='/slide' component={Slide} />

            </Switch>
          </Content>


        </Layout>
    


  );
}

export default App;
