import React, { useState, useEffect } from 'react';
import ProductServices from './../../services/productServices';
import { ThemeContext, themes } from './../AppStyle';

import ProductList from './../../components/ProductList';

function UserFavorites(){
    const [products, setProducts] = useState([]);
    
    const themeBtns = themes.default.btns

    useEffect(() => {
        const favorites = ProductServices.getProductsFromLocalStorage('favorite');
        setProducts(favorites);
    }, []);

    function handleAddToCart(productInfo) {
        ProductServices.setProductToLocalStorage('cart', productInfo);
    }

    function toggleFavorite(productInfo) {
        
        const product = products.find((item) => item.id === productInfo.id);
        if (productInfo.fav) {
            product.fav = false;
            ProductServices.removeProductFromLocalStorage('favorite', product)
            setProducts(products.filter((product) => product.id !== productInfo.id))
        }
    }

    return(
        <div className='container favorites-container'>
            {
                products &&
                <ThemeContext.Provider value={themeBtns}>
                    <ProductList 
                        sectionTitle = 'USER FAVORITE'
                        sectionItems = {products}
                        mainButtonProceeding = {handleAddToCart}
                        mainButtonText = 'add to cart'
                        secondaryButtonProceeding = {toggleFavorite}
                        secondaryButtonStatus = {true}
                    />
                </ThemeContext.Provider>
            }
        </div>
    )
}

export default UserFavorites
