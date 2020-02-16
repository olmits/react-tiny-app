import React, { Component } from "react";
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from "./styles";

class Header extends Component {
    constructor(props){
        super(props)

        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        const {closeCallback} = this.props;
        closeCallback();
    }
    render() {
        const {title, closeButton, styleObject, classes} = this.props;
        let inlineStyle = {backgroundColor: styleObject.backgroundModalHeader};

        return (
            <div className={classes.modalHeader} style={inlineStyle}>
                {title}
                { 
                    closeButton && 
                    <button 
                        className={classes.closeModalBtn}
                        onClick={this.handleClose}
                        >&times;</button>
                }
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string,
    closeButton: PropTypes.bool,
    closeCallback: PropTypes.func
}

export default withStyles(styles)(Header);
