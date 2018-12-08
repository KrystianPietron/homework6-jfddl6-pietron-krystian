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
                    label={this.props._email}
                    onChange={this.props._changeEmailAction}
                />
                <Input
                    floatingLabelText='Password'
                    hintText='Password'
                    type='Password'
                    label={this.props._password}
                    onChange={this.props._changePasswordAction}
                />
                <Input
                    floatingLabelText='Repeat Password'
                    hintText='Repeat Password'
                    type='Password'
                    label={this.props._repeatPassword}
                    onChange={this.props._changeRepeatPasswordAction}
                />
                <Button
                    style={style.button}
                    onClick={this.props._singUpAsyncAction}
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
    _changeRepeatPasswordAction: (event) => dispatch(changeRepeatPasswordAction(event.target.value)),
    _singUpAsyncAction: () => dispatch(singUpAsyncAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Register)