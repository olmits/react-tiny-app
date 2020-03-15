import React from 'react';
import { ThemeContext } from '../../../../containers/AppStyle';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Modal(props){
    const {header, closeButton, text, actions, closeModal, classes} = props;

    return (
        <ThemeContext.Consumer>
            { 
                theme => (
                    <div className={classes.modal} >
                        <div className={classes.modalContent}>
                            <Header 
                                title={header} 
                                closeButton={closeButton} 
                                closeCallback={closeModal} 
                                styleObject={theme}/>
                            <Body 
                                text={text} />
                            <Footer 
                                actions={actions}/>
                        </div>
                        <div onClick={closeModal} className={classes.modalBackdrop}></div>
                    </div>
                )
            }
        </ThemeContext.Consumer>
    )
}

Modal.protoTypes = {
    header: PropTypes.string,
    closeButton: PropTypes.bool,
    closeModal: PropTypes.func,
    text: PropTypes.text,
    actions: PropTypes.array,
}

export default withStyles(styles)(Modal)
