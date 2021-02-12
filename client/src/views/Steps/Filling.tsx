import { Grid, Typography } from '@material-ui/core'
import { Page, Button as ButtonCustom } from 'components'
import { Item } from 'interfaces'
import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import PizzaLoad from 'components/PizzaLoad/PizzaLoad';
import useRouter from 'utils/useRouter';
// import { useLocation } from "react-router-dom";

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
    },
    center: {
        textAlign: 'center'
    }
}));


function FillingList() {
    const classes = useStyles();
    const [pastas, setPastas] = useState<{ data: [Item], recomedation: Item }>()
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState()
    const route = useRouter()
    // const search = useLocation().search;
    // const pasta = new URLSearchParams(search).get('pasta');
    useEffect(() => {
        fetch("http://localhost:3333/fillings")
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setPastas(data)
            });
    }, []);

    const handleSize = (e: any) => {
        setValue(e.target.value);
    }

    const nextToPage = React.useCallback(() => {
        route.history.push(`/buy/size?filling=${value}`)
    }, [value])


    return (
        <div>
            <Page
                title="Faça sua pizza"
            >
                {loading && <PizzaLoad />}
                <section className="box-bola">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => <span key={i} className={`custom-animation animation${i}`}>
                        🍕
                    </span>)}

                    <Grid className={classes.contentTitle} container >
                        <Grid xs={12} item>
                            <Typography className={classes.title}>
                                Escolha o recheio
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid className={classes.content} container justify="center" alignItems="center">

                        {
                            pastas?.data && pastas?.data.map((item) => (
                                <Grid className={classes.center} key={item.id} xs={2} item>
                                    <label className={`radio-container ${pastas?.recomedation.id === item.id ? 'recomedation-label': ''}`} key={item.id}>
                                        <input name="method" type="radio" className="radio-hidden" value={item.id} onClick={handleSize} />
                                        <img alt="" src={'http://localhost:3333/' + item.image} className={`radio-image ${pastas?.recomedation.id === item.id ? 'recomedation' : ''}`} />
                                        <br/><span>{pastas?.recomedation.id === item.id ? 'Pizza do dia' : ''}</span>
                                    </label>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid container justify="center">
                        <Grid className={classes.margin} xs={2} item>
                            <ButtonCustom
                                disabled={!value}
                                onClick={nextToPage}
                                size="large"
                                variant="contained"
                                color="default"
                                className={classes.margin}
                                startIcon={<LocalPizzaIcon />}>
                                Proximo
      </ButtonCustom>
                        </Grid>
                    </Grid>
                </section>
            </Page>
        </div>
    )
}

export default FillingList