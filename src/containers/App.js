import React, { Component } from 'react';
import withStyles from 'react-jss';
import styles from './AppStyles';
import {ThemeContext, themes} from './AppStyles';
import Button from '../components/Button';
import Modal from '../components/Modal';
import fixtures from './../components/fixtures';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal: false, 
      content: {},
      theme: themes.default
    }
    
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }
  closeModal() {
    if (this.state.modal) {
      this.setState({
        modal: false,
        content: {},
        theme: themes.default
      })
    }
  }
  openModal(obj) {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        content: obj,
        theme: themes[obj.theme]
      })
    }
    
  }
  setTheme() {

  }
  handleConfirm() {
    this.closeModal()
    console.log('____: Confirmed');
  }
  handleReject() {
    console.log('____: Rejected');
    this.closeModal()
  }

  render() {
    
    const {classes} = this.props;
    
    const firstModalContent = fixtures.firstModalContent;  // Confirm modal window
    firstModalContent.actions = [
      {id: 'btnActionConf', comp: <Button text="Ok" backgroundColor={themes.confirm.backgroundBtn} onClick={this.handleConfirm}/>},
      {id: 'btnActionRjct', comp: <Button text="Cancel" backgroundColor={themes.confirm.backgroundBtn} onClick={this.handleReject}/>}
    ]
    const secondModalContent = fixtures.secondModalContent;  // Alert modal window
    secondModalContent.actions = [
      {id: 'btnActionConf', comp: <Button text="Ok, boomer" backgroundColor={themes.alert.backgroundBtn} onClick={this.handleConfirm}/>}
    ]
    
    return (
        <div className={classes.main}>
          <div className={classes.buttons}>
            <Button  // Trigger confirmation modal window
              text="Open first modal" 
              backgroundColor={themes.confirm.backgroundBtn}
              onClick={this.openModal.bind(this, firstModalContent)}/>
            <Button  // Trigger alert modal window
              text="Open second modal" 
              backgroundColor={themes.alert.backgroundBtn}
              onClick={this.openModal.bind(this, secondModalContent)}/>
          </div>

         {  this.state.modal &&
             <ThemeContext.Provider value={this.state.theme}>
               <Modal 
                 header={this.state.content.header} 
                 closeButton={this.state.content.closeButton}
                 closeModal={this.closeModal.bind(this)} 
                 text={this.state.content.text}
                 actions={this.state.content.actions}
                 />
             </ThemeContext.Provider>
         }
       </div>
    )
  }
}

export default withStyles(styles)(App);
