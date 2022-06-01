import CardItem from '../Card/Card'
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import productos from '../../utils/productsMock';

const CardList = ({title}) => {
    const [products, setProducts] = useState([])
    
    useEffect( () => {
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
        .catch( (error) => {

        })
        .finally( () => {

        })
    },[])


    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            resolve(productos)
        })
    }
    

    return(
        <>
        
        <h2>{title}</h2>
        {console.log("state products: ", products)}
        <Grid container className='general-container'>
            {
                products.map( ({title, price, image, details, id, stock}) => {
                    return(
                        <Grid item md={3} key={id}>
                            <CardItem title={title} price={price} image={image} details={details} stock={stock}/>
                        </Grid>
                    )
                })
            }
        </Grid>
        </>
    )
}

export default CardList;