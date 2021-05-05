import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import Showtime from './components/Showtime';
import Movie from './components/Movie';
import MovieSeat from './components/MovieSeat';
import Transaction from './components/Transaction';
import UserInfo from './components/UserInfo';
import Report from './components/Report';
import Final from './components/Final';
import {Router,Route,Link,BrowserRouter} from 'react-router-dom'



ReactDOM.render(
  <BrowserRouter>
    <Route path='/home' component={App}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
    <Route path='/showtime' component={Showtime}/>
    <Route path='/movie' component={Movie}/>
    <Route path='/movie_seat' component={MovieSeat}/>
    <Route path='/transaction' component={Transaction}/>
    <Route path='/userInfo' component={UserInfo}/>
    <Route path='/Report' component={Report}/>
    <Route path='/final' component={Final}/>
  </BrowserRouter>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
