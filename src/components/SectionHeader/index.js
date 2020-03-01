import React from 'react';
import {createUseStyles} from 'react-jss';
import PropTypes from 'prop-types';

const useStyle = createUseStyles({
    sectionHeader: {
        margin: {
            top: 50,
            left: 0,
            bottom: 20,
            right: 0
        },
        fontSize: 24,
        color: 'rgba(30, 30, 32, 255)'
    }
})

/**
 * 
 * @description simple Component to customize and render a header for a section
 */
function SectionHeader(props){
    const classes = useStyle();
    return <h3 className={classes.sectionHeader}>{props.title}</h3>
}

SectionHeader.propTypes = {
    title: PropTypes.string
}

export default SectionHeader