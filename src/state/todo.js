import { database } from '../firebaseConfig'

const TASK_VALUE = 'todo/TASK_VALUE'
const TASK_COMPLETED = 'todo/TASK_COMPLETED'
const LOAD_TASKS = 'todo/LOAD_TASKS'
const CLEAR_TASK = 'todo/CLEAR_TASK'

const INITIAL_STATE = {
    tasks: [],
    task: '',
    isCompleted: false
}

export const loadTextFromDbAsyncAction = () => (dispatch, getState) => {
    const { auth: { user: { uid } } } = getState()
    database.ref(`${uid}/tasks/`).on(
        'value',
        snapshot => {
            const array = Object.entries(snapshot.val() || '')
            const tasksList = array.map(entry => ({
                id: entry[0],
                task: entry[1].task,
                isCompleted: entry[1].isCompleted
            }))
            dispatch(loadTasksAction(tasksList))
        });
}

export const updateTask = (data, data2) => (dispatch, getState) => {
    const { auth: { user: { uid } } } = getState()
    console.log('updateTask ', data)
    database.ref(`${uid}/tasks/${data}`).update({
        "isCompleted": !data2
    })
};

export const deleteTask = (data) => (dispatch, getState) => {
    const { auth: { user: { uid } } } = getState()
    console.log('updateTask ', data)
    database.ref(`${uid}/tasks/${data}`).remove()
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
    dispatch(clearTaskAction())
}

export const changeTaskValue = (value) => ({
    type: TASK_VALUE,
    value
})

export const taskIsCompletedAction = (isCompleted) => ({
    type: TASK_COMPLETED,
    isCompleted
})

const clearTaskAction = () => ({
    type: CLEAR_TASK,
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
            case CLEAR_TASK:
            return {
                ...state,
                task: ''
            }
        default:
            return state
    }
}