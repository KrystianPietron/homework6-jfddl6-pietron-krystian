import React from 'react'
import TextField from 'material-ui/TextField'

const Input = (props) => (
    <TextField
        label={props.label}
        onChange={props.onChange}
        style={props.style}
        hintText={props.hintText}
        floatingLabelText={props.floatingLabelText}
        type={props.type}
        value={props.value}
    />
)
export default Input