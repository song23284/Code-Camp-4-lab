import React from 'react';
import { Layout } from 'antd';
import { Route,Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
import Headermenu from './component/Headermenu';
const { Header, Footer, Sider, Content } = Layout;
 class App extends React.Component{  

  state={
    currentMennu:localStorage.getItem('currentMenu')
  }

  handleMenu = ()=>{
    this.setState({
      currentMennu:localStorage.getItem('currentMenu')
    })
  }
   
  
  render =() => {
  return (
    <Layout>
    <Header style={{height:'max-content'}}>
      <Headermenu handleMenu={this.handleMenu} menuKey={this.state.currentMennu} />
    </Header>
    <Content style={{height:'90vh'}}>
     <Route exact path='/' component={Login}/>
     <Route exact path='/signup' component={Signup}/>
     <Route  exact path='/profile' component={Profile}/>
     <Route exact path='/changepassword' component={ChangePassword}/>
    </Content>
  </Layout>
  );
}
}
export default App;
