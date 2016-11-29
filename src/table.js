import React, { Component } from 'react';
import '../bower_components/bootstrap/dist/css/bootstrap.css'
import Portal from 'react-portal';

class Cell extends Component{
	constructor(props){
		super(props)
		this.cellClick = this.cellClick.bind(this);
		this.titleChange = this.titleChange.bind(this);
		this.state = {title : this.props.cellData.title}

	}
	cellClick(data){
		// this.refs.myPortal.openPortal()
		// alert(data)
	}
	titleChange(event){
		this.setState({title: event.target.value});
	}
  render(){
  	const row = 
  			<tr>
				  <td className="success"  onClick={() => this.cellClick(this.props.cellData.id)}>{this.props.cellData.id}</td>
				  <td className="warning"  onClick={() => this.cellClick(this.props.cellData.title)}>{this.props.cellData.title}</td>
				  <td className="warning" onClick={() => this.cellClick(this.props.cellData.userId)}>{this.props.cellData.userId}</td>
			</tr>;
  	return (
  		 <Portal closeOnEsc closeOnOutsideClick openByClickOn={row}>
			<PseudoModal>
			<h2>Modal</h2>
				<form>
					<label> Title </label>
					<input type="text" value={this.state.title} placeholder="Description" onChange={this.titleChange} />
				</form>
			<p></p>
			</PseudoModal>
      </Portal>
  		
	)
  }
}

class Table extends Component{
	// constructor(props){
	// 	super(props)
	// }
	componentDidMount() {

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
			<tbody>
				<tr>
					<th>ID</th>
					<th>Title</th> 
					<th>Userid</th>
				</tr>
				{cells}
			</tbody>
  		</table>

		);
	}
}
export class PseudoModal extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
        <p><button onClick={this.props.closePortal}>Close this</button></p>
      </div>
    );
  }

}


export default Table