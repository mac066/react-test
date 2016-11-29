import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Table from './table'




class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
  
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to table</h2>
            <Table tableData={this.props.apiData} />
        </div>
      </div>
    );
  }
}

export default App;


