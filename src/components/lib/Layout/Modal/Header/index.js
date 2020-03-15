import React from "react";
import { ThemeContext } from '../../../../../containers/AppStyle';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from "./styles";

function Header(props){
    const {title, closeButton, closeCallback, classes} = props;

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className={classes.modalHeader} style={{backgroundColor: theme.backgroundModalHeader}}>
                    {title}
                    { 
                        closeButton && 
                        <button 
                            className={classes.closeModalBtn}
                            onClick={closeCallback}
                            >&times;</button>
                    }
                </div>
            )}
        </ThemeContext.Consumer>
    )
}


Header.propTypes = {
    title: PropTypes.string,
    closeButton: PropTypes.bool,
    closeCallback: PropTypes.func
}

export default withStyles(styles)(Header);
