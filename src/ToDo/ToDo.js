import React from 'react'
import { connect } from 'react-redux'

const ToDo = (props) => (
    <div>ToDo</div>
)
const mapStateToProps = state => ({
    _tasksArray: state.todo.tasks
})

const mapDispatchToProps = dispatch => ({

})
export default connect()(ToDo)