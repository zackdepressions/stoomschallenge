import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import withStyles from '@material-ui/core/styles/withStyles';

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('#EA1D2C'),
        backgroundColor: '#EA1D2C',
        '&:hover': {
            backgroundColor: red[700],
        },
        margin: '0px auto !important',
        display: 'flex',
        fontWeight: 'bold'
    },
}))(Button);

export default ColorButton;