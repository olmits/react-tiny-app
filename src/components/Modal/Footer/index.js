import React, { Component } from "react";
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from "./styles";

class Footer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {actions, classes, styleObject} = this.props;
        let inlineStyle = {backgroundColor: styleObject.backgroundModalBody};
        
        return(
            <div className={classes.modalFooter} style={inlineStyle}>
                {
                    actions.map((action) => {
                        return <div key={action.id}>{action.comp}</div>
                    })
                }
            </div>
        )
    }
}

Footer.propTypes = {
    actions: PropTypes.array
}

export default withStyles(styles)(Footer);