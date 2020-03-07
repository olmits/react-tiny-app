import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

// import Button from './../Button';
// import Modal from './../Modal';
// import fixtures from './../Modal/fixtures';
// import { ThemeContext, themes } from './../../containers/AppStyle';

import SectionHeader from './../SectionHeader';
import ProductCard from './../ProductCard';
import SampleArrow from './SampleSlickArrow';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * @description: create and render a list of items as slick slider carousel of cards
 * @method mainButtonProceeding 
 * @method secondaryButtonProceeding 
 */
class ProductList extends Component {

    mainButtonProceeding(productInfo){
        const { mainButtonProceeding } = this.props
        mainButtonProceeding(productInfo);
    }
    secondaryButtonProceeding(productInfo){
        const {secondaryButtonProceeding} = this.props;
        secondaryButtonProceeding(productInfo)
    }
    render(){
        const {sectionItems, sectionTitle, mainButtonText, secondaryButtonStatus} = this.props
        
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
                <SectionHeader title = {sectionTitle} />
                <Slider {...settings}>
                    {sectionItems.map((product) => <ProductCard 
                                                        key={product.id} 
                                                        productInfo={product}
                                                        mainButtonText={mainButtonText}
                                                        clickOnMainBtn={this.mainButtonProceeding.bind(this)}
                                                        secondaryButtonStatus={secondaryButtonStatus}
                                                        clickOnSecondaryBtn={this.secondaryButtonProceeding.bind(this)}/>
                                                        )}
                </Slider>
            </div>
        )
    }
}

ProductList.propTypes = {
    sectionTitle: PropTypes.string,
    sectionItems: PropTypes.array,
    mainButtonProceeding: PropTypes.func,
    mainButtonText: PropTypes.string,
    secondaryButtonProceeding: PropTypes.func,
    secondaryButtonStatus: PropTypes.bool
}

export default ProductList
