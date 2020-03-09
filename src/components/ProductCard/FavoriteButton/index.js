import React from 'react';
import PropTypes from 'prop-types'

import './../../../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    favoriteBtn: ({
        fontSize: 24,
        cursor: 'pointer',
        position: 'absolute',
        top: 10,
        right: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        '& .fas': {
            color: '#C2C5CC',
            opacity: '0.6',
            transition: 'all .2s'
        },
        '&:hover': {
            fontSize: 28
        }
    }),
})

function FavoriteButton({style, ...props}){
    const classes = useStyles()
    const {addStyle, onClick} = props
    return(
        <div className={classes.favoriteBtn} onClick={onClick}>
            <i className="fas fa-star" style={{...style, ...addStyle}}></i>
        </div>
    )
}

FavoriteButton.propTypes = {
    addStyle: PropTypes.object,
    onClick: PropTypes.func
}

export default FavoriteButton