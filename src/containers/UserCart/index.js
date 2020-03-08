import React, { Component } from 'react';

import ProductServices from './../../services/productServices';
import ProductList from './../../components/ProductList';

import Button from './../../components/Button';
import Modal from './../../components/Modal';
import fixtures from './../../components/Modal/fixtures';
import { ThemeContext, themes } from './../AppStyle';

class UserCart extends Component {
    constructor(props){
        super(props)
        this.state = {
            modal: false, 
            modalContent: {},
            theme: themes.alert,
            themeBtns: themes.alert.btns,
            products: []
        }
    }
    componentDidMount(){
        const cartProducts = ProductServices.getProductsFromLocalStorage('cart');
        this.setState({products: cartProducts});
    }
    openModal(obj) {
        if (!this.state.modal) {
                this.setState({
                    modal: true,
                    modalContent: obj,
                })
            }
        }
    closeModal() {
        if (this.state.modal) {
                this.setState({
                    modal: false,
                    modalContent: {},
                })
            }
        }
    handleRemoveFromCart(productInfo) {
        const removeFromCartModal = fixtures.confirmModalContent;
        removeFromCartModal.actions = [
                {
                    id: 'btnActionConf',
                    comp: <Button
                            text="Yes, please"
                            backgroundColor={this.state.themeBtns.backgroundBtn} 
                            onClick = { () => {
                                ProductServices.removeProductFromLocalStorage('cart', productInfo);
                                this.setState({products: this.state.products.filter((product) => product.id !== productInfo.id)});
                                this.closeModal();
                            }}/>
                },
                {
                    id: 'btnActionRjct', 
                    comp: <Button 
                            text="No, wait" 
                            backgroundColor={this.state.themeBtns.backgroundBtn} 
                            onClick = { () => {
                                this.closeModal();
                            }}/>
                }
            ]
        removeFromCartModal.header = `Are you sure, you want to remove "${ productInfo.title }" from Cart?`;
        this.openModal(removeFromCartModal)
    }
    render(){
        return(
            <div className='container cart-container'>
                {
                    this.state.products &&
                    <ThemeContext.Provider value={this.state.themeBtns}>
                        <ProductList 
                            sectionTitle = 'USER CART'
                            sectionItems={this.state.products}
                            mainButtonProceeding={this.handleRemoveFromCart.bind(this)}
                            mainButtonText = 'remove'
                            secondaryButtonProceeding={() => {}}
                            secondaryButtonStatus = {false}
                        />
                    </ThemeContext.Provider>
                }
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

export default UserCart