import React, { Component } from "react";
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from "./styles";
import {ThemeContext} from '../../../containers/UserPage/style';

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
        const {title, closeButton, classes} = this.props;

        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className={classes.modalHeader} style={{backgroundColor: theme.backgroundModalHeader}}>
                        {title}
                        { 
                            closeButton && 
                            <button 
                                className={classes.closeModalBtn}
                                onClick={this.handleClose}
                                >&times;</button>
                        }
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string,
    closeButton: PropTypes.bool,
    closeCallback: PropTypes.func
}

export default withStyles(styles)(Header);
