import CardItem from '../Card/Card'
import { Grid } from '@mui/material';

const CardList = ({title}) => {
    return(
        <>
        <h2>{title}</h2>
        <Grid container className='general-container'>
            <Grid item md={3}>
                <CardItem title={"Cilindro Muzzarella"} price={900} image={"muzza.jpg"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Cremoso Horma"} price={740} image={"cremoso.jpg"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Barra Tybo"} price={990} image={"tybo.jpg"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Por Salut"} price={780} image={"porsalut.jpg"}/>
            </Grid>
        </Grid>
        </>
    )
}

export default CardList;