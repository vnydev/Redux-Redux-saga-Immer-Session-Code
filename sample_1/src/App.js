import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Layout } from 'antd';
import 'antd/dist/antd.css'; 
import './App.css';
import {Routes} from './app/routes';


function App() {
  return (
    <Layout className="layout">
      {Routes}
    </Layout>
  );
}

export default App;
