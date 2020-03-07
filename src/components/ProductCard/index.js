import React, { Component } from 'react';
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
 * @description: create and render a card of product information
 * @method clickOnCartBtn to handle a click on an add to cart button 
 * @method clickOnFavoriteBtn to handle a click on an add to favorite button
 */
class ProductCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            favorite: false
        }
    }
    componentDidMount(){
        const {productInfo} = this.props;
        if(productInfo.fav) this.setState({favorite: true});
    }
    clickOnMainBtn(){
        const {clickOnMainBtn, productInfo} = this.props;
        clickOnMainBtn(productInfo);
    }
    clickOnSecondaryBtn(){
        const {productInfo, clickOnSecondaryBtn} = this.props;
        console.log(productInfo);
        
        clickOnSecondaryBtn(productInfo)
        this.setState({favorite: !this.state.favorite})
    }
    render(){
        const {productInfo, classes, mainButtonText, secondaryButtonStatus} = this.props
        
        let addFavStyle
        (this.state.favorite ? addFavStyle = {color: 'yellow',opacity: '1'} : addFavStyle = {})
        
        return(
            <div className='product-card-container'>
                <ThemeContext.Consumer>
                    {themeBtns => (
                        <Card className={classes.itemCard}>
                            {   secondaryButtonStatus &&
                                <FavoriteButton 
                                    addStyle={addFavStyle}
                                    onClick={this.clickOnSecondaryBtn.bind(this)}/>
                            }
                            <Card.Img className={classes.itemCardImg} variant="top" src={productInfo.img_url} />
                            <Card.Body className={classes.itemCardBody}>
                                <Card.Subtitle className={classes.itemCardSubtitle}>
                                    <div className={classes.itemCardSubtitleName}>
                                        {productInfo.title}
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
                                <Card.Text className={classes.itemCardText}>{productInfo.description}</Card.Text>
                                <div className={classes.itemCardFooter}>
                                    <div className={classes.itemCardFooterPrice}>${productInfo.price}</div>
                                    <Button text={mainButtonText} backgroundColor={themeBtns.backgroundBtn} onClick={this.clickOnMainBtn.bind(this)} />
                                </div>
                            </Card.Body>
                        </Card>
                    )}
                </ThemeContext.Consumer>
            </div>
        )
    }
}

ProductCard.propTypes = {
    productInfo: PropTypes.object,
    mainButtonText: PropTypes.string,
    clickOnMainBtn: PropTypes.func,
    secondaryButtonStatus: PropTypes.bool,
    clickOnSecondaryBtn: PropTypes.func,
}

export default withStyles(style)(ProductCard);