import CardItem from '../Card/Card'
import { Grid } from '@mui/material';



const CardList = ({title, products}) => {
    
    

    return(
        <>
        
        <h2>{title}</h2>
        {console.log("state products: ", products)}
        <Grid container className='general-container'>
            {
                products.map( ({title, price, image, details, id, stock, category}) => {
                    return(
                        <Grid item md={3} key={id}>
                            <CardItem title={title} price={price} image={image} details={details} stock={stock} id={id} category={category}/>
                        </Grid>
                    )
                })
            }
        </Grid>
        </>
    )
}

export default CardList;