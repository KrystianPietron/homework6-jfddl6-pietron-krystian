import React from 'react'
import Button from '../elements/Button'
import Input from '../elements/Input'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'

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
                    label='Email'
                    floatingLabelText='Email'
                    hintText='Email'
                    onChange={() => { }}
                />
                <Input
                    label='Password'
                    floatingLabelText='Password'
                    hintText='Password'
                    type='Password'
                    onChange={() => { }}
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
                    onClick={() => { }}
                />
            </Paper>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Auth)