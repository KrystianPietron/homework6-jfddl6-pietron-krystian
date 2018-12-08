const EMAIL = 'auth/EMAIL'
const PASSWORD = 'auth/PASSWORD'
const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'

const INITIAL_STATE = {
    email: '',
    password: '',
    isLoginUser: false,
}

export const changeEmailLoginAction = (value) => ({
    type: EMAIL,
    value
})

export const changePasswordLoginAction = (value) => ({
    type: PASSWORD,
    value
})

export const logInAction = () => ({
    type: LOG_IN
})

export const logOutAction = () => ({
    type: LOG_OUT
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoginUser: true
            }
        case LOG_OUT:
            return {
                ...state,
                isLoginUser: false
            }
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
        default:
            return state
    }
}