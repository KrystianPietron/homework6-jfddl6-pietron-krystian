import React from 'react'
import Button from '../elements/Button'
import Input from '../elements/Input'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import {
    changeEmailLoginAction,
    changePasswordLoginAction,
    logInByGoogleButtonAction
} from '../state/auth';

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

class Auth extends React.Component {
    render() {
        return (
            <Paper
                style={style.paper}
            >
                <h3>Default <br></br>Email:  example@example.com <br></br> Password:  example </h3>
                <Input
                    label={this.props._email}
                    floatingLabelText='Email'
                    hintText='Email'
                    onChange={this.props._changeEmailLoginAction}
                />
                <Input
                    label={this.props._password}
                    floatingLabelText='Password'
                    hintText='Password'
                    type='Password'
                    onChange={this.props._changePasswordLoginAction}
                />
                <Button
                    style={style.button}
                    label='Login'
                    primary={true}
                    onClick={() => { }}
                />
                <Button
                    style={style.button}
                    label='Login By Google'
                    primary={true}
                    onClick={this.props._logInByGoogleButtonAction}
                />
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    _password: state.auth.password,
    _email: state.auth.email
})

const mapDispatchToProps = dispatch => ({
    _changeEmailLoginAction: (event) => dispatch(changeEmailLoginAction(event.target.value)),
    _changePasswordLoginAction: (event) => dispatch(changePasswordLoginAction(event.target.value)),
    _logInByGoogleButtonAction: () => dispatch(logInByGoogleButtonAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Auth)