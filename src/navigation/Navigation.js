import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { connect } from 'react-redux'
import { logOutAsyncAction } from '../state/auth';

const styles = {
    title: {
        cursor: 'pointer',
    },
};

const Navigation = (props) => (
    <div>
        <AppBar
            title={<span style={styles.title}>"Homework 6 fddl6 Krystian Pietron"</span>}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonClick={props._logOut}
        />
    </div>
)
const mapDispatchToProps = dispatch => ({
    _logOut: () => dispatch(logOutAsyncAction())
})
export default connect(null, mapDispatchToProps)(Navigation)