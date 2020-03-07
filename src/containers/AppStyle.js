import React from 'react';

export const themes = {
    default: {
        links: {
            cursor: 'pointer',
            textAlign: 'center',
            padding: '0px 10px',
            textTransform: 'uppercase',
        },
        modals: {
            backgroundModalBody: '#c7c7c7',
            backgroundModalHeader: '#c7c7c7',
            backgroundBtn: '#a8a0a0'
        },
        btns: {
            backgroundBtn: '#1e1e20'
        }
    },
    alert: {
        modals: {
            backgroundModalBody: '#ED553B',
            backgroundModalHeader: '#A5402D',
            backgroundBtn: '#9C210C'
        },
        btns: {
            backgroundBtn: '#9C210C'
        }
    },
    confirm: {
        modals: {
            backgroundModalBody: '#3CAEA3',
            backgroundModalHeader: '#22877D ',
            backgroundBtn: '#38686A'
        }
    },
}

export const ThemeContext = React.createContext(
    themes.default
)