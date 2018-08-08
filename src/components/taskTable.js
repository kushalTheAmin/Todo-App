import React, { Component } from 'react';

class taskTable extends Component {

    constructor(props)
    {
        super(props);
        this.onTaskDelete = this.onTaskDelete.bind(this);
    }

    onTaskDelete(index){ this.props.onTaskDelete(index); }
    render() {
        let TaskList;
        if(!this.props.flag) {
            TaskList = this.props.taskList.map((name, index) =>

                <div key={index}>
                    <li>{name}</li>
                    <input type="button" value="Delete" onClick={() => this.onTaskDelete(index)}/>
                </div>
            );
        }
        else{
            TaskList = this.props.taskList.map((name, index) =>
                <div key={index}>
                    <li>{name.task}</li>
                    <input type="button" value="Delete" onClick={() => this.onTaskDelete(name.id)}/>
                </div>
            );

        }
        return (
            <div className="taskTable">
                <ol>
                    {TaskList}
                </ol>
            </div>
        );
    }
}

export default taskTable;
