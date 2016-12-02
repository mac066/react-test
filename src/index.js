import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore } from 'redux'
import { Provider } from "react-redux"
import App from './App';
import checkbox from './components/checkbox'
import './index.css';
import store from './store'
// const store = createStore(checkbox);
// const render = () => {
	// ReactDOM.render(
	// 	<App />,
	// 	document.getElementById('root')
	// );
// }

//   store.subscribe(render);
// render();



// const app = document.getElementById('root')
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, app);

// function reducer(state=0,action){
// 	if(action.type === "inc"){
// 		return state + action.data
// 	}
// 	return state;
// }

// var testStore = createStore(reducer)

// testStore.subscribe(()=>{
// 	console.log('change', testStore.getState())
// })

// testStore.dispatch({type:'inc',data:1})
// testStore.dispatch({type:'inc',data:3})


// const userReducer = function userInfo(state={},action){
// 	switch(action.type){
// 		case "CHANGE_NAME" : {
// 			state = {...state, name : action.name }
// 		break;
// 		}
// 		case "CHANGE_Age" : {
// 			state = {...state, age : action.age }
			
// 		break;
// 		}
// 	}
// 	return state
// }

// const tweetsReducers = (state=[],action) =>{
// 	switch(action.type){
// 		case "NEW_POST" : {
// 			state = {...state, desc : action.desc }
// 		break;			
// 		}
// 	}
// 	return state
	
// }

// const reducers = combineReducers({
// 	user : userReducer,
// 	tweets : tweetsReducers
// })

// var testStore = createStore(reducers)

// testStore.subscribe(()=>{
// 	console.log("chagne",testStore.getState())
// })

// testStore.dispatch({type:"CHANGE_NAME",name:"sagar"})
// testStore.dispatch({type:'CHANGE_Age',age:1})
// testStore.dispatch({type:"CHANGE_NAME",name:"rabib"})
// testStore.dispatch({type:"NEW_POST",desc:"depak"})

