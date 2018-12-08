import React from 'react'
import { connect } from 'react-redux'
import Button from '../elements/Button'
import Input from '../elements/Input'
import Paper from 'material-ui/Paper'
import { changeTaskValue } from '../state/todo'

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
const ToDo = (props) => (
    <Paper
        style={style.paper}>
        <Paper
            style={style.paperElement}>
            <Input
                floatingLabelText='Add Task'
                label='Add Task'
                onChange={props._changeTaskValue}
                hintText='Add Task'
            />
            <Button
                label='Add Task'
                onClick={() => { }}
                primary={true}
            />
            {console.log(props._task)}
        </Paper>
        <Paper
            style={style.paperElement}>
            {props._tasksArray.map((element, index) => <div>{index}. {element.task}</div>)}
        </Paper>
    </Paper>
)
const mapStateToProps = state => ({
    _tasksArray: state.todo.tasks,
    _task: state.todo.task
})

const mapDispatchToProps = dispatch => ({
    _changeTaskValue: (event) => dispatch(changeTaskValue(event.target.value))

})
export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ToDo)