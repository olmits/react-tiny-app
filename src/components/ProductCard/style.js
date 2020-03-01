export default {
    itemCard: {
        maxWidth: '232px',
        margin: {
            top: '0',
            right: '.25rem',
            left: '.25rem',
            bottom: '0'
        },
        '&:hover': {
            '& .fas': {
                color: 'yellow',
                opacity: '1'
            }
        }
    },
    
    itemCardBody : {
        padding: {
            top: 15,
            right: 15,
            bottom: 20,
            left: 15
        }
    },
    itemCardSubtitle: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        fontSize: '16px',
        fontWeight: 500,
        color: 'rgba(0, 0, 0, 255)',
        '& span': {
            fontSize: '13px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(133, 133, 133, 255)',
        }
    },
    itemCardSubtitleName: {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: '70%'
    },
    itemCardSubtitleFilter: {
        display: 'inline-block',
        fontSize: '13px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(133, 133, 133, 255)'
    },
    itemCardText: {
        fontSize: '13px',
        color: 'rgba(0, 0, 0, 255)'
    },
    itemCardFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.7em',
        '& button': {
            textTransform: 'uppercase',
        }
    },
    itemCardFooterPrice: {
        fontSize: '1.5em',
        fontWeight: 500
    },
}