import React, { useState } from 'react';
import withStyles from 'react-jss';
import styles from './style';
import PropTypes from "prop-types";

function Button(props){
    const [hover, setHover] = useState(false);
    const {text, backgroundColor, onClick, classes} = props;

    return (
        <button
            className={classes.btn} 
            style={(hover ? {color: '#ffffff', backgroundColor: backgroundColor} : { color: backgroundColor, borderColor: backgroundColor, backgroundColor: '#ffffff'})} 
            type="button"
            onClick={onClick} 
            onMouseEnter={() => {setHover(!hover)}}
            onMouseLeave={() => {setHover(!hover)}}
        >
            {text}
        </button>
    )
}


Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
}

export default withStyles(styles)(Button);
