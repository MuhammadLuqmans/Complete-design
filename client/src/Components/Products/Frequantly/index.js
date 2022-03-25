import { Typography, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from './Cards'
import { CardData } from './Data';

const myStyles = makeStyles((theme) => ({
    frequently_titel: {
        fontSize: '42px',
        fontWeight: 'bold',
        fontFamily: 'Roboto Slab',
        color: '#000',
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px',
            textAlign: 'center',
        }
    },
    Frequantly_wrapper: {
        maxWidth: '1400px',
        margin: '40px auto',
        padding: '0px 4%',
        display: 'flex',
        alignItems: 'center',
    },
    card_grid: {
        padding: '10px',
        display:'flex',
        justifyContent:'space-around',
        marginTop:'30px',
    },
}))


const Frequantly = () => {
    const classes = myStyles()
    return (
        <div>
            <Grid item container xs={12} className={classes.Frequantly_wrapper}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Typography className={classes.frequently_titel}>Frequently Compared</Typography>
                </Grid>
                <Grid item container xs={12} sm={12} md={9} lg={9} className={classes.cards_wrapper}>

                    {CardData.map((card, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card_grid}>
                                <Cards
                                    image={card.img}
                                    title={card.title}
                                    dimension={card.dimension}
                                    price={card.price}
                                    banner={card.banner}
                                    burners={card.burners}
                                    cookingarea={card.cookingarea}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </div>
    )
}

export default Frequantly;