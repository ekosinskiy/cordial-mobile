import React, {Component} from 'react';

import {connect} from 'react-redux';
import {ActionCreators} from '../Actions';
import {bindActionCreators} from 'redux';
import Home from './Home';

class AppContainer extends Component<{}> {
    render() {
        return <Home {...this.props}/>;
    }
}

function mapDispatchToPros(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
export default connect((state) => {
    return {}
}, mapDispatchToPros)(AppContainer);