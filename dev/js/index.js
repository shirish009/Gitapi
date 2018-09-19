import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';



ReactDOM.render(    
 <UserList/>,
    
    document.getElementById('root')
);
