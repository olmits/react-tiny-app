import React, { Component } from 'react';
import withStyles from 'react-jss';
import styles from './style';
import PropTypes from "prop-types";


class Button extends Component {
    constructor(props){
        super(props)
        this.state = {hover: false}
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover() {
        this.setState({hover: !this.state.hover})
    }
    handleClick() {
        const {onClick} = this.props
        onClick()
    }
    render(){
        const {text, backgroundColor, classes} = this.props;
        let btmStyle;
        
        if (this.state.hover) {
            btmStyle = { 
                color: '#ffffff', 
                backgroundColor: backgroundColor, 
            }
        } else {
            btmStyle = { 
                color: backgroundColor, 
                borderColor: backgroundColor, 
                backgroundColor: '#ffffff',
            }
        }
        return (
            <button 
                className={classes.btn} 
                style={btmStyle} 
                type="button"
                onClick={this.handleClick} 
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
                >
                {text}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
}

export default withStyles(styles)(Button);
