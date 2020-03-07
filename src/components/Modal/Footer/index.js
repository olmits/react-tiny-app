import React, { Component } from "react";
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from "./styles";
import { ThemeContext } from '../../../containers/AppStyle';

class Footer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {actions, classes} = this.props;
        
        return(
            <ThemeContext.Consumer>
                {theme => (
                    <div className={classes.modalFooter} style={{backgroundColor: theme.backgroundModalBody}}>
                        {
                            actions.map((action) => {
                                return <div key={action.id}>{action.comp}</div>
                            })
                        }
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

Footer.propTypes = {
    actions: PropTypes.array
}

export default withStyles(styles)(Footer);