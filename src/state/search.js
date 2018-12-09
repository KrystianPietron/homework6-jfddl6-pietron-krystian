const TASK_VALUE = 'search/TASK_VALUE'

const INITIAL_STATE = {
    searchTaskValue: ''
}

 export const changeSearchTaskValueAction = value => ({
    type: TASK_VALUE,
    value
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASK_VALUE:
            return {
                ...state,
                searchTaskValue: action.value
            }
        default:
            return state
    }
}