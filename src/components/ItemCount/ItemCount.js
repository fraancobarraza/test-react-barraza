import { Button } from '@mui/material';
import { useState } from 'react';

const ItemCount = ({stock, count, actualizarCantidad, setShowButton}) => {

    const addProductTocart = () => {
        console.log("Cantidad:", count)
        setShowButton(true)
    }

    const addCount = () => {
        if(count < stock){
            actualizarCantidad(count + 1)
        }
    }

    const removeCount = () => {
        if(count > 1){
            actualizarCantidad(count - 1)
        }
    }

    return(
        <>
        <div className='count-item'> 
            <Button onClick={removeCount}>-</Button>
            <p>{count}</p>
            <Button onClick={addCount}>+</Button>
        </div>  
        <Button variant='contained' onClick={addProductTocart}>Agregar al Carrito</Button>
        </>
    )
}

export default ItemCount