import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const ButtonDefault = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('#EA1D2C'),
        backgroundColor: '#6D6868',
        '&:hover': {
            backgroundColor: '#534E4E',
        },
        margin: '0px auto !important',
        display: 'flex',
        fontWeight: 'bold'
    },
}))(Button);

export default ButtonDefault;