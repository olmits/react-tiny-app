import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from './../Button';

import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';
import FavoriteButton from './FavoriteButton';
import './../../../node_modules/@fortawesome/fontawesome-free/css/all.css'

import { ThemeContext } from './../../containers/AppStyle';
import style from './style';
import withStyles from 'react-jss';

/**
 * @description ProductCard function create and render a card of product information
 * @param {Object} props contains itemInfo, clickOnMainBtn, mainButtonText, clickOnSecondaryBtn, secondaryButtonStatus
 * 
 */
function ProductCard(props){
    const [favorite, setFavorite] = useState(false);
    
    const {
        itemInfo, 
        clickOnMainBtn, 
        mainButtonText, 
        clickOnSecondaryBtn, 
        secondaryButtonStatus, 
        classes} = props

    useEffect(() => {
        if(itemInfo.fav) setFavorite(true)
    })

    return(
        <div className='product-card-container'>
            <ThemeContext.Consumer>
                {themeBtns => (
                    <Card className={classes.itemCard}>
                        {   secondaryButtonStatus &&
                            <FavoriteButton 
                                addStyle={(favorite ? {color: 'yellow',opacity: '1'} : {})}
                                onClick={() => {
                                    setFavorite(!favorite)
                                    clickOnSecondaryBtn(itemInfo)
                                }}/>
                        }
                        <Card.Img className={classes.itemCardImg} variant="top" src={itemInfo.img_url} />
                        <Card.Body className={classes.itemCardBody}>
                            <Card.Subtitle className={classes.itemCardSubtitle}>
                                <div className={classes.itemCardSubtitleName}>
                                    {itemInfo.title}
                                </div> 
                                <div className={classes.itemCardSubtitleFilter}>by Artist</div>
                            </Card.Subtitle>
                            <StarRatings 
                                rating={3.99}
                                starRatedColor="#c32a2a"
                                starEmptyColor="#cbd3e3"
                                starHoverColor="#222222"
                                numberOfStars={5}
                                starDimension='15px'
                                starSpacing='2px'
                                name='rating'
                            />
                            <Card.Text className={classes.itemCardText}>{itemInfo.description}</Card.Text>
                            <div className={classes.itemCardFooter}>
                                <div className={classes.itemCardFooterPrice}>${itemInfo.price}</div>
                                <Button 
                                    text={mainButtonText} 
                                    backgroundColor={themeBtns.backgroundBtn} 
                                    onClick={() => {
                                        clickOnMainBtn(itemInfo)
                                    }} />
                            </div>
                        </Card.Body>
                    </Card>
                )}
            </ThemeContext.Consumer>
        </div>
    )
}

ProductCard.propTypes = {
    itemInfo: PropTypes.object,
    mainButtonText: PropTypes.string,
    clickOnMainBtn: PropTypes.func,
    secondaryButtonStatus: PropTypes.bool,
    clickOnSecondaryBtn: PropTypes.func,
}

export default withStyles(style)(ProductCard);