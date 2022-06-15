import { Button } from '@mui/material';
import { useState } from 'react';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';


const ItemCount = ({addCart, stock, count, actualizarCantidad, setShowButton}) => {

    const { addProductToCart } = useContext(CartContext)
    

    const addProduct = () => {
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
        <Button variant='contained' onClick={() => addProductToCart( addCart.image, addCart.title, addCart.price, addCart.details, addCart.stock, addCart.category, addCart.id )}>Agregar al Carrito</Button>
        </>
    )
}

export default ItemCount