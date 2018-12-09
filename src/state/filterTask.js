const FILTER_ARG_TRUE = 'filterTask/FILTER_ARG_TRUE'
const FILTER_ARG_FALSE = 'filterTask/FILTER_ARG_FALSE'
const FILTER_ARG_ALL = 'filterTask/FILTER_ARG_ALL'

const INITIAL_STATE = {
    filterTask: [],
    arg: null
}

export const filterArgTrue = () => ({
    type: FILTER_ARG_TRUE
})

export const filterArgFalse = () => ({
    type: FILTER_ARG_FALSE
})

export const filterArgAll = () => ({
    type: FILTER_ARG_ALL
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILTER_ARG_TRUE:
            return {
                ...state,
                arg: true
            }
        case FILTER_ARG_FALSE:
            return {
                ...state,
                arg: false
            }
        case FILTER_ARG_ALL:
            return {
                ...state,
                arg: null
            }
        default:
            return state
    }
}
