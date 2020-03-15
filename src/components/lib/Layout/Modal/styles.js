export default {
    modal: {
        display: 'block',
        position: 'fixed',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        outline: '0',
        overflowX: 'hidden',
        overflowY: 'auto',
        zIndex: '1072',
    },
    modalBackdrop: {
        position: 'fixed',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        backgroundColor: '#000000',
        opacity: '.5',
        zIndex: '1071',
    },
    modalContent: {
        margin: 'auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: {
            top: 100,
            right: 0,
            left: 0,
            bottom: 0
        },
        width: '40%',
        color: 'white',
        zIndex: '1073'
    }
}