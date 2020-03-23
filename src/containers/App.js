import React from 'react';
import { connect } from 'react-redux';

import Routes from './Routes';

function App(props){
    console.log(props);
    
    const { name } = props.user;
    const { year } = props.page;

    return(
        <div
            data-testid={`${name}-${year}`}
        >
            <Routes />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(mapStateToProps)(App);
