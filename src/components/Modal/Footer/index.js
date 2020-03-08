import React from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../containers/AppStyle';

import withStyles from 'react-jss';
import styles from "./styles";

function Footer(props){
    const {actions, classes} = props;

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


Footer.propTypes = {
    actions: PropTypes.array
}

export default withStyles(styles)(Footer);