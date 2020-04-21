import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'

// https://api.github.com/users

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar  />
        <UserItem />
      </div>
    );
  }
  
}

export default App;
