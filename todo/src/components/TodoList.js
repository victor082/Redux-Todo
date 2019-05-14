import React from 'react';
import { connect } from 'react-redux';

import {addTask, toggleTask} from '../actions';

class TodoList extends React.Component {
    state = {
        newTask: ''
    }

    handleChanges = e => {
        this.setState({ newTask: e.target.value });
    };
    
    addTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState({ newTask: '' });
    }

    toggleTask = id => {
        this.props.toggleTask(id);
    }

    render() {
        return (
            <React.Fragment>
                <div className="todo-list">
                    {this.props.tasks &&
                        this.props.tasks.map((task) => (
                            <h4 onClick={() => this.toggleTask(task.id)} key={task.id}>
                                {task.task}
                                {task.completeStatus && <i className="fas fa-check-square" />}
                            </h4>
                        ))}
                </div>
                <input
                    type="text"
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                    placeholder="Add a task"
                />
                <button onClick={this.addTask}>Add task</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

export default connect(
    mapStateToProps,
    { addTask, toggleTask }
)(TodoList);