import React from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../containers/AppStyle';

import withStyles from "react-jss";
import styles from "./styles";

function Body(props){
    const {text, classes} = props;
    return(
        <ThemeContext.Consumer>
            {theme => (
                <div className={classes.modalBody} style={{backgroundColor: theme.backgroundModalBody}}>{text}</div>
            )}
        </ThemeContext.Consumer>
    )
}

Body.propTypes = {
    text: PropTypes.string
}

export default withStyles(styles)(Body);