import React from 'react'
import { connect } from 'react-redux'
import Button from '../elements/Button'
import Input from '../elements/Input'
import Paper from 'material-ui/Paper'
import {
    changeTaskValue,
    addTaskAction,
    loadTextFromDbAsyncAction,
    stopSyncingFromDbAsyncAction,
    updateTask,
    deleteTask
} from '../state/todo'
import { ListItem, LinearProgress } from 'material-ui';
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import ActionDone from 'material-ui/svg-icons/action/done'
import ActionDoneBorder from 'material-ui/svg-icons/content/clear'

const style = {
    paper: {
        margin: 30,
        padding: 10
    },
    paperElement: {
        margin: 10,
        padding: 10
    },
    input: {
        width: '70%'
    }
}

class ToDo extends React.Component {
    componentWillMount() {
        this.props._loadTaskFromDbAsyncAction()
        console.log(this.props._tasksArray)
    }

    componentWillUnmount() {
        this.props._stopSyncingFromDbAsyncAction()
    }

    render() {
        return (
            <Paper
                style={style.paper}>
                <Paper
                    style={style.paperElement}>
                    <Input
                        floatingLabelText='Add Task'
                        label='Add Task'
                        onChange={this.props._changeTaskValue}
                        hintText='Add Task'
                        style={style.input}
                    />
                    <Button
                        label='Add Task'
                        onClick={this.props._addTaskAction}
                        primary={true}
                    />
                    {}
                </Paper>
                <Paper
                    style={style.paperElement}>
                    {this.props._tasksArray.map(
                        (element, index) => (
                            console.log(element),
                            <ListItem
                                key={element.id}
                                primaryText={element.task}
                                style={
                                    element.isCompleted === true ?
                                        { textDecoration: 'line-through ' }
                                        :
                                        { textDecoration: ' none' }
                                }
                                rightIconButton={
                                    <div>
                                        <IconButton
                                            onClick={() => {
                                                this.props._updateTask(element.id, element.isCompleted)
                                            }
                                            }
                                        >
                                            {element.isCompleted === true ?
                                                <ActionDone />
                                                :
                                                <ActionDoneBorder />
                                            }
                                        </IconButton>
                                        <IconButton>
                                            <DeleteIcon
                                                onClick={() => {
                                                    this.props._deleteTask(element.id)
                                                }
                                                }
                                            />
                                        </IconButton>
                                    </div>
                                }
                            > </ListItem>
                        ))
                    }
                </Paper>
            </Paper>
        )
    }
}
const mapStateToProps = state => ({
    _tasksArray: state.todo.tasks,
    _task: state.todo.task,
})

const mapDispatchToProps = dispatch => ({
    _changeTaskValue: (event) => dispatch(changeTaskValue(event.target.value)),
    _addTaskAction: () => dispatch(addTaskAction()),
    _loadTaskFromDbAsyncAction: () => dispatch(loadTextFromDbAsyncAction()),
    _stopSyncingFromDbAsyncAction: () => dispatch(stopSyncingFromDbAsyncAction()),
    _updateTask: (data, data2) => dispatch(updateTask(data, data2)),
    _deleteTask: (data) => dispatch(deleteTask(data))

})
export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ToDo)