import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'

import Button from '../elements/Button'
import Input from '../elements/Input'

const style = {
    paper: {
        margin: 30,
        padding: 10
    },
    input: {
        width: '70%'
    }
}

const Search = (props) => (
    <Paper
        style={style.paper}
    >
        <Input
            style={style.input}
            floatingLabelText='Search Task'
            onChange={() => { }}
        />
        <Button
            label='Search'
            primary={true}
            onClick={() => { }}
        />
    </Paper>
)

const mapStateToProps = state => ({
    _allTasks: state.todo.tasks,
})

export default connect(mapStateToProps)(Search)