import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import ListItem from './list/Listitem';
import Header from './components/Header';
import Footer from './components/Footer';

const root = 
ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='app'>
  <Header/>
<div className='app-body'>
  <span className='app-list'>

    <ListItem/>
    <ListItem/>
    <ListItem/>
    <ListItem/>

  
  </span>
</div>
<Footer/>
</div>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
