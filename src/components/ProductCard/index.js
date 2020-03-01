import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './../Button';
import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';
import FavoriteButton from './FavoriteButton';
import './../../../node_modules/@fortawesome/fontawesome-free/css/all.css'

import withStyles from 'react-jss';
import styles from './style';

/**
 * @description: create and render a card of product information
 * @method clickOnCartBtn to handle a click on an add to cart button 
 * @method clickOnFavoriteBtn to handle a click on an add to favorite button
 */
class ProductCard extends Component {
    constructor(props){
        super(props)

        this.state = {favorite: false}
    }
    componentDidMount(){
        const {productInfo} = this.props;
        if (productInfo.fav) {
            this.setState({favorite: true})
        }
    }
    clickOnCartBtn(){
        const {clickOnCartBtn, productInfo} = this.props;
        clickOnCartBtn(productInfo.id);
    }
    clickOnFavoriteBtn(){
        const {productInfo, clickOnAddFavoriteBtn, clickOnRemoveFavoriteBtn} = this.props;
        if (!this.state.favorite) {
            clickOnAddFavoriteBtn(productInfo.id);
            this.setState({favorite: true})
        } else {
            clickOnRemoveFavoriteBtn(productInfo.id);
            this.setState({favorite: false})
        }
    }
    render(){
        const {productInfo, classes} = this.props
        let addFavStyle
        (this.state.favorite ? addFavStyle = {color: 'yellow',opacity: '1'} : addFavStyle = {})
        
        return(
            <Card className={classes.itemCard}>
                <FavoriteButton 
                    addStyle={addFavStyle}
                    onClick={this.clickOnFavoriteBtn.bind(this)}/>
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
                        <Button text='add to cart' backgroundColor='#1e1e20' onClick={this.clickOnCartBtn.bind(this)} />
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

ProductCard.propTypes = {
    productInfo: PropTypes.object,
    clickOnCartBtn: PropTypes.func,
    clickOnAddFavoriteBtn: PropTypes.func,
    clickOnRemoveFavoriteBtn: PropTypes.func
}

export default withStyles(styles)(ProductCard);