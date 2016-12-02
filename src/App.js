import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Table from './table'
import store from './store'
console.log(store)
import { Provider } from "react-redux"



class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
    <provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to table</h2>
              <Table />
          </div>
        </div>
    </provider>
      
    );
  }
}

export default App;


