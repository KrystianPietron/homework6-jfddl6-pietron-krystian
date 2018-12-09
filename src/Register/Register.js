import React from 'react'

import { connect } from 'react-redux'

import Button from '../elements/Button'
import Input from '../elements/Input'
import Paper from 'material-ui/Paper'
import {
    changeEmailAction,
    changePasswordAction,
    changeRepeatPasswordAction,
    singUpAsyncAction
} from '../state/register';

const style = {
    paper: {
        margin: 30,
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        margin: 15,
        width: 230,
    }
}

const Register = (props) => (
    <Paper
        style={style.paper}
    >
        <h2>Sing UP!</h2>
        <Input
            floatingLabelText='Email'
            label={props._email}
            onChange={props._changeEmailAction}
        />
        <Input
            floatingLabelText='Password'

            type='Password'
            label={props._password}
            onChange={props._changePasswordAction}
        />
        <Input
            floatingLabelText='Repeat Password'
            hintText='Repeat Password'
            type='Password'
            label={props._repeatPassword}
            onChange={props._changeRepeatPasswordAction}
        />
        <Button
            style={style.button}
            onClick={props._singUpAsyncAction}
            label='Sing Up'
        />
    </Paper>
)

const mapStateToProps = state => ({
    _email: state.register.email,
    _password: state.register.password,
    _repeatPassword: state.register.repeatPassword

})

const mapDispatchToProps = dispatch => ({
    _changeEmailAction: (event) => dispatch(changeEmailAction(event.target.value)),
    _changePasswordAction: (event) => dispatch(changePasswordAction(event.target.value)),
    _changeRepeatPasswordAction: (event) => dispatch(changeRepeatPasswordAction(event.target.value)),
    _singUpAsyncAction: () => dispatch(singUpAsyncAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Register)