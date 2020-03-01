import React, { Component } from 'react';
import withStyles from 'react-jss';
import styles from './styles';
import {ThemeContext, themes} from '../../containers/UserPage/style';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class Modal extends Component {
    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        const {closeModal} = this.props;
        closeModal();
    }
    render(){
        
        const {header, closeButton, text, actions, classes} = this.props;
        let theme = this.context;
        
        return (
            <div className={classes.modal} >
                <div className={classes.modalContent}>
                    <Header 
                        title={header} 
                        closeButton={closeButton} 
                        closeCallback={this.handleClose} 
                        styleObject={theme}/>
                    <Body 
                        text={text} />
                    <Footer 
                        actions={actions}/>
                </div>
                <div onClick={this.handleClose} className={classes.modalBackdrop}></div>
            </div>
        )
    }
}

Modal.contextType = ThemeContext;

Modal.protoTypes = {
    header: PropTypes.string,
    closeButton: PropTypes.bool,
    closeModal: PropTypes.func,
    text: PropTypes.text,
    actions: PropTypes.array,
}

export default withStyles(styles)(Modal)
