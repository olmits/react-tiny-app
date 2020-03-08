import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import { ThemeContext } from './../../containers/AppStyle';

import withStyles from 'react-jss';

import Navbar from 'react-bootstrap/Navbar';
import style from './style';


function HeaderNavBar(props){
    const { brand, links, classes } = props;

    return(
        <ThemeContext.Consumer>
            { (theme) => (
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                    { 
                        brand && <Navbar.Brand href={brand.url}><img src={brand.logo} style={{maxWidth: "50px", maxHeight:"50px"}}></img></Navbar.Brand>
                    }
                    <Navbar.Toggle aria-controls="responsive__header-navbar-nav" />
                    <Navbar.Collapse id="responsive__header-navbar-nav">
                        <div className={classes.responsive__headerNavbarNav__links}>
                            {
                                links.map((link, index) => <Link key={index} to={link.url} style={theme}>{link.title}</Link>)
                            }
                        </div>
                    </Navbar.Collapse>
                </Navbar>) 
            }
        </ThemeContext.Consumer>
    )
}

HeaderNavBar.propTypes = {
    brand: PropTypes.object,
    links: PropTypes.array
}

export default withStyles(style)(HeaderNavBar)