import { database } from '../firebaseConfig'

const TASK_VALUE = 'todo/TASK_VALUE'
const TASK_COMPLETED = 'todo/TASK_COMPLETED'

const INITIAL_STATE = {
    tasks: [],
    task: '',
    isCompleted: false
}

export const loadTextFromDbAsyncAction = () => (dispatch, getState) => {
    const { auth: { user: { uid } }, todo: { tasks } } = getState()
    database.ref(`${uid}/tasks/`).once(
        'value',
        snapshot => {
            let items = snapshot.val();
            for (let item in items) {
                tasks.push({
                    id: item,
                    task: items[item].task,
                    isCompleted: items[item].isCompleted
                });
            }

        });
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
        default:
            return state
    }
}