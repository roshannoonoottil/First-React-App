import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListItem from './list/Listitem';

const root = 
ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='app'>
<div className='app-header'>
  <span className='header-title'>Demo Coding</span>
  <span>Home</span>
  <span>Usage</span>
  <span>Settings</span>
  <span>Logout</span>

</div>
<div className='app-body'>
  <span className='app-list'>

    <ListItem/>
    <ListItem/>
    <ListItem/>
    <ListItem/>

  
  </span>
</div>
<div className='app-footer'>
  Copyright@DemoCodeing | All Rights Reserved
</div>

</div>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
