import CardItem from '../Card/Card'
import { Grid } from '@mui/material';

const CardList = ({title}) => {
    return(
        <>
        <h2>{title}</h2>
        <Grid container className='general-container'>
            <Grid item md={3}>
                <CardItem title={"Cilindro Muzzarella"} price={900} image={"muzza.jpg"} stock={5} details={"La muzzarella posee una identidad única para todos los argentinos que con sus gustos, costumbres y usos le fueron dando una identidad única a este queso. Es elaborada con leche de vaca y como producto presente de la base alimentaria reúne a miles de personas en la mesa diaria."}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Cremoso Horma"} price={740} image={"cremoso.jpg"} stock={3} details={"Temperatura de conservación: 4ºC a 8ºC. Presentación: Horma. Envasado: Al vacío. Peso: 4,20 Kg."}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Barra Tybo"} price={990} image={"tybo.jpg"} stock={6} details={"El queso Tybo argentino en barra conserva una apariencia cremosa con un color blanco amarillento uniforme. La textura es compacta y lisa, no granulosa, tal como se percibe e la vista. La corteza es lisa y bien formada, no presenta grietas ni fisuras. Su sabor es ligeramente salado, láctico y muy dócil."}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Por Salut"} price={780} image={"porsalut.jpg"} stock={8} details={"Temperatura de conservación: 2ºC a 8ºC. Presentación: Horma. Envasado: Al vacío. Peso: 3,69 Kg."}/>
            </Grid>
        </Grid>
        </>
    )
}

export default CardList;