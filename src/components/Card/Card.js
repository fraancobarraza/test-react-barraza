import './Card.css'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Modal from '../Modal/Modal';
import { Button } from '@mui/material';

const CardItem = ({ image, title, price, details, stock } ) => {
    const[open, setOpen] = useState(false)
    const[count, setCount] = useState(0)
    

    const handleClose = () => {
        setOpen(false)
    }

    const addCount = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const removeCount = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    const addCart = () => {
        if(count <= 1){
            console.log(`Se agregó ${count} producto al carrito`)
        }else{
            console.log(`Se agregaron ${count} productos al carrito`)
        }
    }

    return(
        <Card sx={{ minWidth: 275 }} className="card-container">
            <CardContent>
                <div className="card-item">    
                    <div>
                        <img src={`./shop/${image}`}/>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <div className='count-item'> 
                        <Button onClick={removeCount}>-</Button>
                        <p>{count}</p>
                        <Button onClick={addCount}>+</Button>
                    </div>  
                    <Button variant='outlined' onClick={() => setOpen (true)}>Detalle</Button>
                    <Button variant='contained' disabled={count === 0} onClick={addCart}>Comprar</Button>
                </div>
            </CardContent>
            <Modal
                open={open}
                handleClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <h2>{title}</h2>
                <img src={`./shop/${image}`} alt={'Producto'}/>
                <div>{details}</div>
            </Modal>
        </Card>
    )
}

export default CardItem