import React, { Component } from 'react';

import ProductServices from './../../services/productServices';
import ProductList from './../../components/ProductList';

import { ThemeContext, themes } from './../AppStyle';

class UserFavorites extends Component {
    constructor(props){
        super(props)
        this.state = {
            themeBtns: themes.default.btns,
            products: []
        }
    }
    componentDidMount(){
        const favorites = ProductServices.getProductsFromLocalStorage('favorite');
        this.setState({products: favorites});
    }
    handleAddToCart(productInfo) {
        ProductServices.setProductToLocalStorage('cart', productInfo);
    }
    toggleFavorite(productInfo) {
        const product = this.state.products.find((item) => item.id === productInfo.id);
        if (product.fav) {
          product.fav = false;
          ProductServices.removeProductFromLocalStorage('favorite', product)
          this.setState({products: this.state.products.filter((product) => product.id !== productInfo)})
        }
      }
    render(){
        return(
            <div className='container favorites-container'>
                {
                    this.state.products &&
                    <ThemeContext.Provider value={this.state.themeBtns}>
                        <ProductList 
                            sectionTitle = 'USER FAVORITE'
                            sectionItems = {this.state.products}
                            mainButtonProceeding = {this.handleAddToCart.bind(this)}
                            mainButtonText = 'add to cart'
                            secondaryButtonProceeding = {this.toggleFavorite.bind(this)}
                            secondaryButtonStatus = {true}
                        />
                        </ThemeContext.Provider>
                }
            </div>
        )
    }
}

export default UserFavorites