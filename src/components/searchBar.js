import React, { Component } from 'react';

class searchBar extends Component {

    constructor(props){
        super(props);
        this.state= {
            searchTaskName : ''
        };
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(event) {
        let searchTaskName = event.target.value;
        this.setState({
            searchTaskName : searchTaskName
        },()=> {this.props.onSearch(this.state.searchTaskName)});
    }

    render() {

        return (
            <div className="searchBar">
                <input type="text" value={this.state.searchTaskName} onChange={this.onSearch}/>
            </div>
        );
    }
}

export default searchBar;
