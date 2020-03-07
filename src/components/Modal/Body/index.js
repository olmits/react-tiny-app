import React, { Component } from "react";
import PropTypes from 'prop-types';
import withStyles from "react-jss";
import styles from "./styles";
import { ThemeContext } from '../../../containers/AppStyle';


class Body extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {text, classes} = this.props;
        return(
            <ThemeContext.Consumer>
                {theme => (
                    <div className={classes.modalBody} style={{backgroundColor: theme.backgroundModalBody}}>{text}</div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

Body.propTypes = {
    text: PropTypes.string
}

export default withStyles(styles)(Body);