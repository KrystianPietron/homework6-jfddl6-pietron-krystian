import React from 'react'
import { connect } from 'react-redux'
import Button from '../elements/Button'
import Input from '../elements/Input'
import Paper from 'material-ui/Paper'
import {
    changeTaskValue,
    addTaskAction,
    loadTextFromDbAsyncAction,
    stopSyncingFromDbAsyncAction
} from '../state/todo'
import { ListItem } from 'material-ui';

const style = {
    paper: {
        margin: 30,
        padding: 10
    },
    paperElement: {
        margin: 10,
        padding: 30
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
                        (element, index) =>
                            <ListItem
                                key={element.id}
                                primaryText={element.task}
                                // rightIconButton={
                                // }
                            > </ListItem>)
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
    _stopSyncingFromDbAsyncAction: () => dispatch(stopSyncingFromDbAsyncAction())

})
export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ToDo)