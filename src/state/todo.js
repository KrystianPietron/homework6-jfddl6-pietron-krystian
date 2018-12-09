import { database } from '../firebaseConfig'

const TASK_VALUE = 'todo/TASK_VALUE'
const TASK_COMPLETED = 'todo/TASK_COMPLETED'
const LOAD_TASKS = 'todo/LOAD_TASKS'

const INITIAL_STATE = {
    tasks: [],
    task: '',
    isCompleted: false
}

export const loadTextFromDbAsyncAction = () => (dispatch, getState) => {
    const { auth: { user: { uid } }, todo: { tasks } } = getState()
    database.ref(`${uid}/tasks/`).on(
        'value',
        snapshot => {
            const array = Object.entries(snapshot.val())
            const tasksList = array.map(entry => ({
                ...entry[1]
            }))
            dispatch(loadTasksAction(tasksList))
        });
}

export const stopSyncingFromDbAsyncAction = () => (dispatch, getState) => {
    const { auth: { user: { uid } } } = getState()
    database.ref(`${uid}/tasks/`).off()
}

export const addTaskAction = () => (dispatch, getState) => {
    const { todo: { task }, auth: { user: { uid } } } = getState()
    database.ref(`${uid}/tasks/`).push({
        task,
        isCompleted: false
    })
}

export const changeTaskValue = (value) => ({
    type: TASK_VALUE,
    value
})

export const taskIsCompletedAction = () => ({
    type: TASK_COMPLETED
})

const loadTasksAction = (data) => ({
    type: LOAD_TASKS,
    data
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASK_VALUE:
            return {
                ...state,
                task: action.value
            }
        case TASK_COMPLETED:
            return {
                ...state,
                isCompleted: !state.isCompleted
            }
        case LOAD_TASKS:
            return {
                ...state,
                tasks: action.data
            }
        default:
            return state
    }
}