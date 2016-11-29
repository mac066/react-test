import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import axios from 'axios'


axios.get('https://jsonplaceholder.typicode.com/posts').then((result)=>{
	if(result.data && result.data.length){

		ReactDOM.render(
		  <App apiData={result.data} />,
		  document.getElementById('root')
		);
	}
})



