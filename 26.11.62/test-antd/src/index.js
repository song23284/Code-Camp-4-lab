import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginPage from './pages/LoginPage';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import { Tabs, Button } from 'antd';
import Singup from './pages/Singup';


const { TabPane } = Tabs;


ReactDOM.render(
  <React.StrictMode>
    <Tabs >
    <TabPane tab="LoginPage" key="1">
    <LoginPage/>
    </TabPane>
    <TabPane tab="Signup" key="2">
     <Singup/>
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of tab 3
    </TabPane>
  </Tabs>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
