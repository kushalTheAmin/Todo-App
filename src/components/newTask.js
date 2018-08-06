import React, { Component } from 'react';

class NewTask extends Component {

    constructor(props){
        super(props);
        this.state= {
            taskName : ''
        };

        this.onTaskNameChange = this.onTaskNameChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let taskName = this.state.taskName;
        this.setState({
           taskName : ''
        });
        this.props.handleSubmit(taskName);
    }

    onTaskNameChange(event)
    {

        this.setState({
            taskName : event.target.value
        });
    }



    render() {

        return (
            <div className="newTask">
                <div>
                    <form>
                        <label>Enter Task :</label>
                        <input type="text" value ={this.state.taskName} onChange={this.onTaskNameChange}/>
                        <input type="button" value ="submit" onClick={this.handleSubmit}/>

                    </form>

                </div>
            </div>
        );
    }
}

export default NewTask;
