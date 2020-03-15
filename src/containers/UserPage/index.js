import React, { useState, useEffect } from 'react';
import ProductServices from './../../services/productServices';
import { ThemeContext, themes } from './../AppStyle';

import ProductList from './../../components/ProductList';
import Button from '../../components/lib/Layout/Button';
import Modal from './../../components/Modal';
import fixtures from './../../components/Modal/fixtures';
import AppContent from './../../components/lib/Layout/AppContent';

function UserPage() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState(themes.default);
  
  const themeBtns = themes.default.btns

  useEffect(() => {
    (async  () => {
      const products = await ProductServices.getProducts('data/products.json');
      const favorites = ProductServices.getProductsFromLocalStorage('favorite');
      if (favorites) {
        products.map((product) => {
          if (favorites) {
            (favorites.some((favorite) => favorite.id === product.id) ? product['fav'] = true : product['fav'] = false);  
          } else product['fav'] = false;
        });
      }
      setProducts(products);
    })();
  }, []);

  function handleAddToCart(productInfo) {
    const addCartModal = fixtures.confirmModalContent;
    addCartModal.actions = [
            {
                id: 'btnActionConf',
                comp: <Button
                        text="Yes, sure"
                        backgroundColor={theme.backgroundBtn} 
                        onClick = { () => {
                            ProductServices.setProductToLocalStorage('cart', productInfo);
                            setModal(false)
                            setTheme(themes.default)
                            setModalContent({})
                        }}/>
            },
            {
                id: 'btnActionRjct', 
                comp: <Button 
                        text="No, please" 
                        backgroundColor={theme.backgroundBtn} 
                        onClick = { () => {
                            setModal(false)
                            setTheme(themes.default)
                            setModalContent({})
                        }}/>
            }
        ]
    addCartModal.header = `Are you sure, you want to purchase "${ productInfo.title }"?`;
    
    setModalContent(addCartModal)
    setTheme(themes[addCartModal.theme])
    setModal(true)
  }

  function toggleFavorite(productInfo) {
    const product = products.find((item) => item.id === parseInt(productInfo.id));
    if (product.fav) {
      product.fav = false;
      ProductServices.removeProductFromLocalStorage('favorite', product)
    } else {
      product.fav = true;
      ProductServices.setProductToLocalStorage('favorite', product);  
    }
  }

  return (
    <>
      <div className = 'container'>
        <ThemeContext.Provider value={themeBtns}>
          <ProductList 
            sectionTitle = 'LATEST ARRIVALS IN MUSICA'
            sectionItems = {products}
            mainButtonProceeding = {handleAddToCart}
            mainButtonText = 'add to cart'
            secondaryButtonProceeding = {toggleFavorite}
            secondaryButtonStatus = {true}
          />
        </ThemeContext.Provider>
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
    </>
  )
} 

export default UserPage;
