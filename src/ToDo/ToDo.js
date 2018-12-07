import React from 'react'
import { connect } from 'react-redux'
import Button from '../elements/Button'
import Input from '../elements/Input'

const ToDo = (props) => (
    <div>
        <div>
            <Input
                label={}
                onChange={() => { }}
                hintText='Add Task'
            />
            <Button />
        </div>
    </div>
)
const mapStateToProps = state => ({
    _tasksArray: state.todo.tasks
})

const mapDispatchToProps = dispatch => ({

})
export default connect()(ToDo)