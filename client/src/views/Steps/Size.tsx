import { Grid, Typography } from '@material-ui/core'
import { Page, Button as ButtonCustom } from 'components'
import { Pasta } from 'interfaces'
import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import PizzaLoad from 'components/PizzaLoad/PizzaLoad';
import useRouter from 'utils/useRouter';

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


function SizeList() {
    const classes = useStyles();
    const [pastas, setPastas] = useState<[Pasta]>()
    const [loading, setLoading] = useState(true);
    const route = useRouter()
    
    useEffect(() => {
        fetch("http://localhost:3333/pastas")
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setPastas(data)
            });
    }, []);

    const handlePasta = (e: any) => {
        console.log(e.target.value)
    }

    const nextToPage = React.useCallback(() => {
        route.history.push("/buy/size")
    },[])
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
                                Escolha o tamanho
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid className={classes.content} container justify="center" alignItems="center">

                        {
                            pastas && pastas.map((item) => (
                                <Grid key={item.id} xs={2} item>
                                    <button onClick={handlePasta}>
                                        <label className="radio-container" key={item.id}>
                                            <input name="method" type="radio" className="radio-hidden" value={item.id} />
                                            <img alt="" src={'http://localhost:3333/' + item.image} className="radio-image" />
                                        </label>
                                    </button>
                                </Grid>
                            ))
                        }
                        <Grid className={classes.margin} xs={12} item>
                            <ButtonCustom 
                            onClick={nextToPage}
                            size="large" 
                            variant="contained" 
                            color="primary" 
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

export default SizeList