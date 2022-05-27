import CardItem from '../Card/Card'
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

const CardList = ({title}) => {
    const [products, setProducts] = useState([])
    const productos = [
        {
            title : "Cilindro Muzzarella",
            price : 900,
            image : "muzza.jpg",
            stock : 5,
            details : "La muzzarella posee una identidad única para todos los argentinos que con sus gustos, costumbres y usos le fueron dando una identidad única a este queso. Es elaborada con leche de vaca y como producto presente de la base alimentaria reúne a miles de personas en la mesa diaria.",
            id : 1
        },
        {
            title : "Cremoso Horma", 
            price : 740, 
            image : "cremoso.jpg", 
            stock : 3,
            details : "Temperatura de conservación: 4ºC a 8ºC. Presentación: Horma. Envasado: Al vacío. Peso: 4,20 Kg.",
            id : 2
        },
        {
            title : "Barra Tybo", 
            price : 990, 
            image : "tybo.jpg", 
            stock : 6, 
            details : "El queso Tybo argentino en barra conserva una apariencia cremosa con un color blanco amarillento uniforme. La textura es compacta y lisa, no granulosa, tal como se percibe e la vista. La corteza es lisa y bien formada, no presenta grietas ni fisuras. Su sabor es ligeramente salado, láctico y muy dócil.",
            id : 3
        },
        {
            title : "Por Salut", 
            price : 780, 
            image : "porsalut.jpg", 
            stock : 8, 
            details : "Temperatura de conservación: 2ºC a 8ºC. Presentación: Horma. Envasado: Al vacío. Peso: 3,69 Kg.",
            id : 4
        }
    ]
    
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            resolve(productos)
        })
    }


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

    getProducts()

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