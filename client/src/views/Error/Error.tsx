import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Button as ButtonCustom } from 'components'

const useStyles = makeStyles(({
    icon: {
        width: 192,
        height: 192,
        color: "#ea1d2c"
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: `100%`,
    },
    paper: {
        margin: 0,
        height: '100vh',
    },
    button: {
        fontWeight: 'bold',
        marginTop: 20,
    },
    p: {
        color: '#546e7a'
    }
}))


function PageNotFound() {
    const classes = useStyles()

    return (
        <Paper className={classes.paper}>
            <div className={classes.container}>
                <Typography variant="h2">404: A página que você está procurando não está aqui</Typography>
                <Typography className={classes.p}>Ou você tentou um caminho obscuro ou veio aqui por engano. Seja o que for, tente usar a navegação.</Typography>
                <br />
                <br />

                <ButtonCustom
                    variant="outlined"
                    aria-label="home"
                    href="/"
                    className={classes.button}
                >
                    Voltar para Pagina inicial
                </ButtonCustom>
            </div>
        </Paper>
    )
}

export default React.memo(PageNotFound)