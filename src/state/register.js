const EMAIL = 'register/EMAIL'
const PASSWORD = 'register/PASSWORD'
const REPEAT_PASSWORD = 'register/REPEAT_PASSWORD'

const INITIAL_STATE = {
    email: '',
    password: '',
    repeatPassword: ''
}

export const changeEmailAction = (value) => ({
    type: EMAIL,
    value
})

export const changePasswordAction = (value) => ({
    type: PASSWORD,
    value
})

export const changeRepeatPasswordAction = (value) => ({
    type: REPEAT_PASSWORD,
    value
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL:
            return {
                ...state,
                email: action.value
            }
        case PASSWORD:
            return {
                ...state,
                password: action.value
            }
        case REPEAT_PASSWORD:
            return {
                ...state,
                repeatPassword: action.value
            }
        default:
            return state
    }
}