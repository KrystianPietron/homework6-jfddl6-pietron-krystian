import React from 'react'
import { ListItem } from 'material-ui';
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Button from '../elements/Button'
import {
    filterArgFalse,
    filterArgTrue,
    filterArgAll
} from '../state/filterTask';

const style = {
    paper: {
        margin: 30,
        padding: 10
    },
    paperElement: {
        margin: 10,
        padding: 10
    },
    button: {
        margin: 10,
        width: '31%'
    }
}
const FilterTask = (props) => (
    <Paper
        style={style.paper}>
        <h2> Filter task COMPLETED / UNCOMPLETED / ALL</h2>
        <Paper style={style.paperElement}>
            <Button
                label='ALL TASK'
                primary={true}
                style={style.button}
                onClick={props._filterArgAll}
            />
            <Button
                label='Task Completed'
                primary={true}
                style={style.button}
                onClick={props._filterArgTrue}
            />
            <Button
                label='task uncompleted'
                primary={true}
                style={style.button}
                onClick={props._filterArgFalse}
            />
        </Paper>
        <Paper style={style.paperElement}>
            {props._arg === null ?
                props._allTasks.filter((element) => element)
                    .map((el) => (<ListItem
                        key={el.id}
                        primaryText={el.task}
                    />))
                :
                props._allTasks.filter((element) => element.isCompleted === props._arg)
                    .map((el) => (<ListItem
                        key={el.id}
                        primaryText={el.task}
                    />))}
        </Paper>
    </Paper>
)

const mapStateToProps = state => ({
    _arg: state.filterTask.arg,
    _allTasks: state.todo.tasks
})

const mapDispatchToProps = dispatch => ({
    _filterArgTrue: () => dispatch(filterArgTrue()),
    _filterArgFalse: () => dispatch(filterArgFalse()),
    _filterArgAll: () => dispatch(filterArgAll())
})
export default connect(mapStateToProps, mapDispatchToProps)(FilterTask)