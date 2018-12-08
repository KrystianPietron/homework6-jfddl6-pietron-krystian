import { auth, googleProvider} from '../firebaseConfig'

const EMAIL = 'auth/EMAIL'
const PASSWORD = 'auth/PASSWORD'
const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'

const INITIAL_STATE = {
    email: '',
    password: '',
    isLoginUser: false,
}

export const initAuthLoginAsyncAction = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            if (user) {
                dispatch(logInAction(user))
            } else {
                dispatch(logOutAction())
            }
        }
    )
}

export const logInAsyncAction = () => (dispatch, getState) => {
    const { auth: { email, password } } = getState()
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            alert(`Email or password is incorrect. If you are not registered, do it!`)
        })
}

export const logOutAsyncAction = () => (dispatch, getState) => {
    auth.signOut()
}

export const changeEmailLoginAction = (value) => ({
    type: EMAIL,
    value
})

export const changePasswordLoginAction = (value) => ({
    type: PASSWORD,
    value
})

const logInAction = (user) => ({
    type: LOG_IN,
    user
})

const logOutAction = () => ({
    type: LOG_OUT
})

export const logInByGoogleButtonAction = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
}

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