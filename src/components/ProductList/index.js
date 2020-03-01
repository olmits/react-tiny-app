import React, { Component } from 'react';
import Slider from 'react-slick';

import SectionHeader from './../SectionHeader';
import ProductCard from './../ProductCard';
// import UserProductCard from './../../containers/UserProductCard';
import SampleArrow from './SampleSlickArrow';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class ProductList extends Component {
    
    handleAddToCart(prodId){
        const {handleAddToCart} = this.props
        handleAddToCart(prodId)
    }
    handleAddToFavorite(prodId){
        const {handleAddToFavorite} = this.props
        handleAddToFavorite(prodId)
    }
    handleRemoveFromFavorite(prodId){
        const {handleRemoveFromFavorite} = this.props
        handleRemoveFromFavorite(prodId)
    }
    render(){
        const {dataProducts} = this.props
        
        const settings = {
            dots: false,
            infinite: false,
            speed: 200,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows: true,
            nextArrow: <SampleArrow addStyle={{top: -40, right: 3}} addContentClass='customNextArrow'/>,
            prevArrow: <SampleArrow addStyle={{top: -40, right: 25}} addContentClass='customPrevArrow'/>
        }
        return(
            <div className="slider-container">
                <SectionHeader title="LATEST ARRIVALS IN MUSICA" />
                <Slider {...settings}>
                    {dataProducts.map((product) => <ProductCard 
                                                        key={product.id} 
                                                        productInfo={product}
                                                        clickOnCartBtn={this.handleAddToCart.bind(this)}
                                                        clickOnAddFavoriteBtn={this.handleAddToFavorite.bind(this)}
                                                        clickOnRemoveFavoriteBtn={this.handleRemoveFromFavorite.bind(this)}

                            />)}
                </Slider>
            </div>
        )
    }
}

export default ProductList