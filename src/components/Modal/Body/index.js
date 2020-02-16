import React, { Component } from "react";
import PropTypes from 'prop-types';
import withStyles from "react-jss";
import styles from "./styles";


class Body extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {text, styleObject, classes} = this.props;
        let inlineStyle = {backgroundColor: styleObject.backgroundModalBody};

        return(
            <div className={classes.modalBody} style={inlineStyle}>{text}</div>
        )
    }
}

Body.propTypes = {
    text: PropTypes.string
}

export default withStyles(styles)(Body);