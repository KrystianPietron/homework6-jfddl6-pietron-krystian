import React from 'react'

import { connect } from 'react-redux'

import Button from '../elements/Button'
import Input from '../elements/Input'
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

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Register)