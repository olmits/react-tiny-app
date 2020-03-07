import React, { Component } from 'react';

import ProductServices from './../../services/productServices';
import ProductList from './../../components/ProductList';

import Button from './../../components/Button';
import Modal from './../../components/Modal';
import fixtures from './../../components/Modal/fixtures';
import { ThemeContext, themes } from './../AppStyle';

class UserPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal: false, 
      modalContent: {},
      theme: themes.default,
      themeBtns: themes.default.btns,
      products: [],
    } 
  }

  async componentDidMount() {
    const products = await ProductServices.getProducts('data/products.json');
    const favorites = ProductServices.getProductsFromLocalStorage('favorite');
    if (favorites) {
      products.map((product) => {
        if (favorites) {
          (favorites.some((favorite) => favorite.id === product.id) ? product['fav'] = true : product['fav'] = false);
        } else product['fav'] = false;
      });
    }
    
    this.setState({products});
  }

  openModal(obj) {
      if (!this.state.modal) {
              this.setState({
                  modal: true,
                  modalContent: obj,
                  theme: themes[obj.theme]
          })
      }
  }
  closeModal() {
      if (this.state.modal) {
              this.setState({
                  modal: false,
                  modalContent: {},
                  theme: themes.default
              })
      }
  }
  
  handleAddToCart(productInfo) {
    const addCartModal = fixtures.confirmModalContent;
    addCartModal.actions = [
            {
                id: 'btnActionConf',
                comp: <Button
                        text="Yes, sure"
                        backgroundColor={themes.confirm.backgroundBtn} 
                        onClick = { () => {
                            ProductServices.setProductToLocalStorage('cart', productInfo);
                            this.closeModal();
                        }}/>
            },
            {
                id: 'btnActionRjct', 
                comp: <Button 
                        text="No, please" 
                        backgroundColor={themes.confirm.backgroundBtn} 
                        onClick = { () => {
                            this.closeModal();
                        }}/>
            }
        ]
    addCartModal.header = `Are you sure, you want to purchase "${ productInfo.title }"?`;
    this.openModal(addCartModal)
  }
  
  toggleFavorite(productInfo) {
    const product = this.state.products.find((item) => item.id === parseInt(productInfo.id));
    if (product.fav) {
      product.fav = false;
      ProductServices.removeProductFromLocalStorage('favorite', product)
    } else {
      product.fav = true;
      ProductServices.setProductToLocalStorage('favorite', product);  
    }
  }

  render() {
    return (
        <div className = 'container'>
            <ThemeContext.Provider value={this.state.themeBtns}>
              <ProductList 
                sectionTitle = 'LATEST ARRIVALS IN MUSICA'
                sectionItems = {this.state.products}
                mainButtonProceeding = {this.handleAddToCart.bind(this)}
                mainButtonText = 'add to cart'
                secondaryButtonProceeding = {this.toggleFavorite.bind(this)}
                secondaryButtonStatus = {true}
              />
            </ThemeContext.Provider>
            { this.state.modal && 
                <ThemeContext.Provider value={this.state.theme.modals}>
                    <Modal 
                        header={this.state.modalContent.header} 
                        closeButton={this.state.modalContent.closeButton}
                        closeModal={this.closeModal.bind(this)} 
                        text={this.state.modalContent.text}
                        actions={this.state.modalContent.actions}
                        />
                </ThemeContext.Provider>
            }
       </div>
    )
  }
}

export default UserPage;
