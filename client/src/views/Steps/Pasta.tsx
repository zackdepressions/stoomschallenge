import { Grid, Typography } from '@material-ui/core'
import { Page, Button as ButtonCustom, ButtonDefault } from 'components'
import { Item } from 'interfaces'
import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import PizzaLoad from 'components/PizzaLoad/PizzaLoad';
import useRouter from 'utils/useRouter';
import { useLocation } from "react-router-dom";
import DialogComponent from 'components/DialogComponent';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
    content: {
        marginTop: theme.spacing(8),
    },
    margin: {
        marginTop: theme.spacing(10),
    },
    title: {
        color: '#3E3E3E',
        textAlign: 'center',
        fontSize: '1.5rem'
    },
    contentTitle: {
        marginTop: theme.spacing(15)
    }
}));


function PastaList() {
    const classes = useStyles();
    const [pastas, setPastas] = useState<[Item]>()
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = React.useState<boolean>(false);
    const route = useRouter()
    const [value, setValue] = useState()
    const search = useLocation().search;
    const filling = new URLSearchParams(search).get('filling');
    const size = new URLSearchParams(search).get('size');

    useEffect(() => {
        fetch("http://localhost:3333/pastas")
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setPastas(data)
            });
    }, []);

    const handlePasta = (e: any) => {
        setValue(e.target.value);
    }

    const handleClickOpen = React.useCallback(() => {
        setOpen(true);
    }, [])

    const handleClose = React.useCallback(() => {
        setOpen(false);
    }, [])

    const onSubmit = React.useCallback(() => {
        handleClickOpen()
        let data = {
            size: size,
            filling: filling,
            pasta: value
        }
        console.log(data)
    }, [value])

    const backToPage = React.useCallback(() => {
        route.history.push(`/buy/size?filling=${filling}`)
    }, [value])

    const toPushHome = () => {
        route.history.push(`/`)
    }

    return (
        <div>
            <Page
                title="Faça sua pizza"
            >
                {loading && <PizzaLoad />}
                <section className="box-bola">
                    {[1, 2, 3, 5, 6, 7, 8].map((i) => <span key={i} className={`custom-animation animation${i}`}>
                        🍕
                    </span>)}

                    <Grid className={classes.contentTitle} container >
                        <Grid xs={12} item>
                            <Typography className={classes.title}>
                                Escolha um massa para sua pizza
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid className={classes.content} container justify="center" alignItems="center">

                        {
                            pastas && pastas.map((item) => (
                                <Grid key={item.id} xs={2} item >
                                    <label className="radio-container" key={item.id}>
                                        <input name="method" type="radio" className="radio-hidden" value={item.id} onClick={handlePasta} />
                                        <img alt="" src={'http://localhost:3333/' + item.image} className="radio-image" />
                                    </label>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid container justify="center">
                        <Grid className={classes.margin} xs={2} item>
                            <ButtonDefault
                                onClick={backToPage}
                                size="large"
                                variant="contained"
                                color="primary"
                                className={classes.margin}
                                startIcon={<LocalPizzaIcon />}>
                                Voltar
      </ButtonDefault>
                        </Grid>
                        <Grid className={classes.margin} xs={2} item>
                            <ButtonCustom
                                disabled={!value}
                                onClick={onSubmit}
                                size="large"
                                variant="contained"
                                color="default"
                                className={classes.margin}
                                startIcon={<LocalPizzaIcon />}>
                                Finalizar pedido
      </ButtonCustom>
                        </Grid>
                    </Grid>
                </section>
            </Page>
            <DialogComponent
                open={open}
                onClose={handleClose}
                callback={toPushHome}
                title={`Seu pedido esta sendo processado`}
            />
        </div>
    )
}

export default PastaList