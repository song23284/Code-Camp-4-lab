import React from 'react';
import { Layout } from 'antd';
import { Route,Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Layout>
    <Header style={{height:'5vh'}}>Header</Header>
    <Content style={{height:'90vh'}}>
     <Route exact path='/' component={Login}/>
     <Route exact path='/signup' component={Signup}/>
     <Route  exact path='/profile' component={Profile}/>
     <Route exact route='/changepassword' component={ChangePassword}/>


    </Content>
    <Footer style={{height:'5vh'}}>Footer</Footer>
  </Layout>
  );
}

export default App;
