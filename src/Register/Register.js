import React from 'react'

import { connect } from 'react-redux'

import Button from '../elements/Button'
import Input from '../elements/Input'
import Paper from 'material-ui/Paper'
import { changeEmailAction, changePasswordAction, changeRepeatPasswordAction } from '../state/register';

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
        width: 130,
    }
}

class Register extends React.Component {
    render() {
        return (
            <Paper
                style={style.paper}
            >
                <Input
                    floatingLabelText='Email'
                    hintText='Email'
                    onChange={() => { }}
                />
                <Input
                    floatingLabelText='Password'
                    hintText='Password'
                    onChange={() => { }}
                />
                <Input
                    floatingLabelText='Return Password'
                    hintText='Return Password'
                    onChange={() => { }}
                />
                <Button
                    style={style.button}
                    onClick={() => { }}
                    label='Sing Up'
                    primary={true}
                />
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    _email: state.register.email,
    _password: state.register.password,
    _repeatPassword: state.register.repeatPassword

})

const mapDispatchToProps = dispatch => ({
    _changeEmailAction: (event) => dispatch(changeEmailAction(event.target.value)),
    _changePasswordAction: (event) => dispatch(changePasswordAction(event.target.value)),
    _changeRepeatPasswordAction: (event) => dispatch(changeRepeatPasswordAction(event.target.value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Register)