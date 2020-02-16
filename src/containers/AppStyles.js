import React from 'react';

export default {
    main: {
        margin: 'auto',
        padding: {
            top: 10,
            right: 0,
            left: 0,
            bottom: 0
        },
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column'
    }
}

export const themes = {
    alert: {
        backgroundModalBody: '#ED553B',
        backgroundModalHeader: '#A5402D',
        backgroundBtn: '#9C210C'
    },
    confirm: {
        backgroundModalBody: '#3CAEA3',
        backgroundModalHeader: '#22877D ',
        backgroundBtn: '#38686A'
    },
    default: {
        backgroundModalBody: '#c7c7c7',
        backgroundModalHeader: '#c7c7c7',
        backgroundBtn: '#a8a0a0'
    }
  };
  
  export const ThemeContext = React.createContext(
    themes.default // default value
  );
  