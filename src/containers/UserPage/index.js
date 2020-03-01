import React, { Component } from 'react';
import ProductList from './../../components/ProductList';
import ProductServices from './../../services/productServices';

import withStyles from 'react-jss';
import styles from './style';

import {ThemeContext, themes} from './style';
import Button from './../../components/Button';
import Modal from './../../components/Modal';
import fixtures from './../../components/fixtures';


class UserPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal: false, 
      products: [],
      content: {},
      theme: themes.default
    } 
  }

  async componentDidMount() {
    const products = await ProductServices.getProducts('data/products.json');
    const favorites = ProductServices.getProductFromLocalStorage('favorite');
    
    products.map((product) => {
      if (favorites) {
        (favorites.some((favorite) => favorite.id === product.id) ? product['fav'] = true : product['fav'] = false);
      } else product['fav'] = false;
    });
    
    this.setState({products});
  }

  handleAddToCart(prodId) {
    const product = this.state.products.find((item) => item.id === parseInt(prodId));
    const confirmCallback = ProductServices.setProductToLocalStorage.bind(this, 'cart', product);
    
    const addCartModal = fixtures.confirmModalContent;
    addCartModal.actions = [
      {
        id: 'btnActionConf', 
        comp: <Button 
                text="Yes, sure" 
                backgroundColor={themes.confirm.backgroundBtn} 
                onClick={this.handleConfirm.bind(this, confirmCallback)}/>
      },
      {
        id: 'btnActionRjct', 
        comp: <Button 
                text="No, please" 
                backgroundColor={themes.confirm.backgroundBtn} 
                onClick={this.handleReject.bind(this)}/>
      }
    ]
    addCartModal.header += `you want to purchase "${product.title}"`

    this.openModal(addCartModal)
  }

  handleAddToFavorite(prodId) {
    const product = this.state.products.find((item) => item.id === parseInt(prodId));
    ProductServices.setProductToLocalStorage('favorite', product);
  }

  handleRemoveFromFavorite(prodId) {
    const product = this.state.products.find((item) => item.id === parseInt(prodId));
    ProductServices.removeProductFromLocalStorage('favorite', product)
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
  handleConfirm(callback) {
    if (callback) callback();
    this.closeModal();
  }
  handleReject() {
    this.closeModal();
  }

  render() {
    
    const {classes} = this.props;
    return (
        <div className='container'>
          <div className={classes.main}>
            <ProductList 
              dataProducts={this.state.products}
              handleAddToCart={this.handleAddToCart.bind(this)}
              handleAddToFavorite={this.handleAddToFavorite.bind(this)}
              handleRemoveFromFavorite={this.handleRemoveFromFavorite.bind(this)}
            />
          </div>
          { this.state.modal && 
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

export default withStyles(styles)(UserPage);
