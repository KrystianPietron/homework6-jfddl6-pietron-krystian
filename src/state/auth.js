const EMAIL = 'auth/EMAIL'
const PASSWORD = 'auth/PASSWORD'

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
        default:
            return state
    }
}