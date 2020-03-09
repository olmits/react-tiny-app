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
 * @description ProductList function create and render a list of items as slick slider carousel of cards
 * @param {Object} props contains sectionItems, sectionTitle, mainButtonText, mainButtonProceeding, secondaryButtonStatus, secondaryButtonProceeding
 */
function ProductList(props){
    const {
        sectionItems, 
        sectionTitle, 
        mainButtonText, 
        mainButtonProceeding, 
        secondaryButtonStatus, 
        secondaryButtonProceeding} = props

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
                {sectionItems.map((item) => <ProductCard 
                                                    key={item.id} 
                                                    itemInfo={item}
                                                    mainButtonText={mainButtonText}
                                                    clickOnMainBtn={mainButtonProceeding}
                                                    secondaryButtonStatus={secondaryButtonStatus}
                                                    clickOnSecondaryBtn={secondaryButtonProceeding}/>
                                                    )}
            </Slider>
        </div>
    )
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
