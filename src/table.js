import React, { Component } from 'react';
import '../bower_components/bootstrap/dist/css/bootstrap.css'
// import './bootstrap-theme.min.css'

class Cell extends Component{
	// constructor(props){
	// 	super(props)
	// }

  render(){
  	return (
  			<tr>
				  <td className="success">{this.props.cellData.id}</td>
				  <td className="warning">{this.props.cellData.title}</td>
				  <td className="warning">{this.props.cellData.userId}</td>

		  	</tr>
	)
  }
}

class Table extends Component{
	// constructor(props){
	// 	super(props)
	// }
	componentDidMount() {

		// this.timerID = setInterval(
		// () => this.tick(),
		// 1000
		// );
	}

	componentWillUnmount() {
		// clearInterval(this.timerID);
	}
	render(){
		var cells = []
	    this.props.tableData.forEach((data)=>{
	      cells.push(<Cell cellData={data} key={data.id} />)

	    })

		return (
		<table className="table">
			<tr>
				<th>Firstname</th>
				<th>Lastname</th> 
				<th>Age</th>
			</tr>
			{cells}
  		</table>

		);
	}
}


export default Table