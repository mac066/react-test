import React, { Component } from 'react';
import '../bower_components/bootstrap/dist/css/bootstrap.css'
// import Portal from 'react-portal';
import axios from 'axios'

class Cell extends Component{
	constructor(props){
		super(props)
		this.cellClick = this.cellClick.bind(this);
		this.titleChange = this.titleChange.bind(this);
		// this.state = {title : this.props.cellData.title}

	}
	cellClick(data){
		// this.refs.myPortal.openPortal()
		// alert(data)
	}
	titleChange(event){
		this.setState({title: event.target.value});
	}
	
  render(){
  	return (
			<tr>
				<td>
					<form>
						<input  type="checkbox" value="" />
					</form>
				</td>
				 <td	className="success"  >{this.props.cellData.id}</td>
				  <td className="warning" >{this.props.cellData.title}</td>
				  <td className="warning" >{this.props.cellData.userId}</td>
			</tr>	 
	)
  }
}

class Table extends Component{
	constructor(props){
		super(props)
		this.state = {
			cell : []
		}
	}
	componentDidMount() {
			axios.get('https://jsonplaceholder.typicode.com/posts').then((result)=>{
			if(result.data && result.data.length){
				// this.props.tableData = result.data
				var cells = []
	    	result.data.forEach((data)=>{
	      	cells.push(<Cell cellData={data} key={data.id} />)

				})
				// console.log(cells)
				this.setState({
					cell : cells
				})


			}
		})
	}

	componentWillUnmount() {
	
	}
	render(){
		return (
		<table className="table">
			<tbody>
				<tr>
					<th></th>
					<th>ID</th>
					<th>Title</th> 
					<th>Userid</th>
				</tr>
					{this.state.cell}
			</tbody>
  		</table>

		);
	}
}



export default Table