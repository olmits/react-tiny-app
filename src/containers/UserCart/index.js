import React, { useState, useEffect } from 'react';

import ProductServices from './../../services/productServices';
import ProductList from './../../components/ProductList';

import Button from './../../components/Button';
import Modal from './../../components/Modal';
import fixtures from './../../components/Modal/fixtures';
import { ThemeContext, themes } from './../AppStyle';

function UserCart(){
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [products, setProducts] = useState([]);
    const [theme, setTheme] = useState(themes.default);

    const themeBtns = themes.alert.btns

    useEffect(() => {
        const cartProducts = ProductServices.getProductsFromLocalStorage('cart');
        setProducts(cartProducts);
    }, []);

    function handleRemoveFromCart(productInfo) {
        const removeFromCartModal = fixtures.confirmModalContent;
        removeFromCartModal.actions = [
                {
                    id: 'btnActionConf',
                    comp: <Button
                            text="Yes, please"
                            backgroundColor={themeBtns.backgroundBtn} 
                            onClick = { () => {
                                ProductServices.removeProductFromLocalStorage('cart', productInfo);
                                setProducts(products.filter((product) => product.id !== productInfo.id))
                                setModal(false)
                                setTheme(themes.default)
                                setModalContent({})
                            }}/>
                },
                {
                    id: 'btnActionRjct', 
                    comp: <Button 
                            text="No, wait" 
                            backgroundColor={themeBtns.backgroundBtn} 
                            onClick = { () => {
                                setModal(false)
                                setTheme(themes.default)
                                setModalContent({})
                            }}/>
                }
            ]
        removeFromCartModal.header = `Are you sure, you want to remove "${ productInfo.title }" from Cart?`;

        setModalContent(removeFromCartModal)
        setTheme(themes.alert)
        setModal(true)
    }

    return(
        <div className='container cart-container'>
            {
                products &&
                <ThemeContext.Provider value={themeBtns}>
                    <ProductList 
                        sectionTitle = 'USER CART'
                        sectionItems={products}
                        mainButtonProceeding={handleRemoveFromCart}
                        mainButtonText = 'remove'
                        secondaryButtonProceeding={() => {}}
                        secondaryButtonStatus = {false}
                    />
                </ThemeContext.Provider>
            }
            { modal && 
                <ThemeContext.Provider value={theme.modals}>
                    <Modal 
                        header={modalContent.header} 
                        closeButton={modalContent.closeButton}
                        closeModal={() => {
                            setModal(false)
                            setTheme(themes.default)
                            setModalContent({})
                        }}
                        text={modalContent.text}
                        actions={modalContent.actions}
                        />
                </ThemeContext.Provider>
            }
        </div>
    )
}

export default UserCart
