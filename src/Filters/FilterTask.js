import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Button from '../elements/Button'

const style = {
    paper: {
        margin: 30,
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
        <Button
            label='ALL TASK'
            primary={true}
            style={style.button}
        />
        <Button
            label='Task Completed'
            primary={true}
            style={style.button}
        />
        <Button
            label='task uncompleted'
            primary={true}
            style={style.button}
        />
    </Paper>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps)(FilterTask)