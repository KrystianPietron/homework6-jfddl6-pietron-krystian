import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { ListItem } from 'material-ui';
import Button from '../elements/Button'
import Input from '../elements/Input'
import { changeSearchTaskValueAction } from '../state/search';
import { unifyString } from './unify'

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
        width: '20%'
    },
    input: {
        width: '70%'
    }
}

const Search = (props) => (
    <Paper
        style={style.paper} >
        <h2>Search task</h2>
        <Paper style={style.paperElement}>
            <Input
                style={style.input}
                floatingLabelText='Search Task'
                onChange={props._changeSearchTaskValueAction}
            />
            <Button
                style={style.button}
                label='Search'
                primary={true}
                onClick={() => { }}
            />
        </Paper>
        <Paper style={style.paperElement}>
            {props._allTasks.filter((element) => unifyString(element.task)
                .includes(
                    unifyString(props._searchTask)))
                .map((el) => (<ListItem
                    key={el.id}
                    primaryText={el.task}
                />))}
        </Paper>
    </Paper>
)

const mapStateToProps = state => ({
    _allTasks: state.todo.tasks,
    _searchTask: state.search.searchTaskValue

})

const mapDispatchToProps = dispatch => ({
    _changeSearchTaskValueAction: (event) => dispatch(changeSearchTaskValueAction(event.target.value))

})

export default connect(mapStateToProps, mapDispatchToProps)(Search)