import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Table from './table'
import * as actions from './actions';

class App extends Component {
    onNextButtonClicked() {
        const {data}= this.props.data;
        let isOdds = false,
            aItemClicked = false,
            isEvens = false;

        isEvens = data.every(item => {
            if (!item.checked) return true;

            aItemClicked = true;
            return item.id % 2 === 0 || false;
        });


        if (!isEvens) {
            isOdds = data.every(item => {
                if (!item.checked) return true;
                return item.id % 2 === 0 ? false : true;
            });
        }

        if (!aItemClicked || (isEvens === isOdds)) {
            this.props.actions.gotoNextPage(false)
            return alert('I don\'t like mixed value, only odd or even please.');
        }

        this.props.actions.gotoNextPage(true)
    }

    componentDidMount() {
        this.props.actions.loadData();
    }

    onCheckBoxClicked(item) {
        return ()=> (this.props.actions.checkItemClicked(item));
    }

    renderTables() {
        if (this.props.data.data.length) {
            return ( <Table onCheckBoxClicked={this.onCheckBoxClicked.bind(this)}
                            data={this.props.data.data}/>);
        }

        return null;
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to table</h2>
                    { !this.props.data.nextPage &&
                    <button onClick={this.onNextButtonClicked.bind(this)} className="btn btn-primary"> Next</button>}
                    { this.props.data.nextPage ? this.renderNextPage() : this.renderTables()}
                </div>
            </div>
        );
    }

    renderNextPage() {
        return (
            <div>Welcome to next page.</div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        data: state.data
    };
};

const mapActionToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};
export default connect(mapStateToProps, mapActionToProps)(App);


