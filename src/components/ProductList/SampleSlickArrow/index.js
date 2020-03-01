import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    listArrowSample: ({
        cursor: 'pointer',
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundColor: '#cc3333',
        borderRadius: '.25rem',
        transition: 'all 0.6ms easy-out',
        '&:hover': {
            opacity: '.7'
        },
        '&::after': {
            position: 'relative',
            top: '-4px',
            color: '#FFFFFF'
        },
        '&.customNextArrow': {
            '&::after': {
                left: '3px',
                content: '"\u2192"',
            }
        },
        '&.customPrevArrow': {
            '&::after': {
                right: '-3px',
                content: '"\u2190"',
            }
        }

    }),
})

export default function SampleArrow({style, onClick, ...props}) {
    const classes = useStyles();
    const {addStyle, addContentClass} = props;

    return (
        <div
            className={[classes.listArrowSample, addContentClass].join(' ')}
            style={{ ...style, ...addStyle}}
            onClick={onClick}
        />
    );
}