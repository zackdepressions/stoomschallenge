import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { Page } from 'components'
import { Pasta } from 'interfaces'
import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
});



function PastaList() {

    const classes = useStyles();
    const [pastas, setPastas] = useState<[Pasta]>()

    useEffect(() => {
        fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
            .then((res) => res.json())
            .then((data) => setPastas(data));
    }, []);

    return (
        <div>
            <Page
                title="Faça sua pizza"
            >
                {
                    pastas && pastas.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <Card className={classes.card}>
                                {/* <CardMedia className={classes.media} image={character.img_url} /> */}
                                <CardContent>
                                    <Typography color="primary" variant="h5">
                                        {item.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Page>
        </div>
    )
}

export default PastaList