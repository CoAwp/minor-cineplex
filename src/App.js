import { Component } from 'react';
import './App.css';
import Movie from './components/Movie'
import UserInfo from './components/UserInfo'
import UserInput from './components/UserInput'
import Header from './components/Header'



class App extends Component {
  render(){
    return(
      <body>
        <div className="container-fluid background-image">
        <Header/>
        </div>
      </body>
    )
  }
  ;
}

export default App;
