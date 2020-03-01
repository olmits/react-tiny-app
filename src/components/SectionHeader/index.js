import React from 'react';
import {createUseStyles} from 'react-jss'

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

export default function SectionHeader(props){
    const classes = useStyle();
    return <h3 className={classes.sectionHeader}>{props.title}</h3>
}