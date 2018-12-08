const TASK_VALUE = 'todo/TASK_VALUE'

const INITIAL_STATE = {
    tasks: [],
    task: '',
    isCompleted: false
}

export const changeTaskValue = (value) => ({
    type: TASK_VALUE,
    value
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASK_VALUE:
            return {
                ...state,
                task: action.value
            }
        default:
            return state
    }
}