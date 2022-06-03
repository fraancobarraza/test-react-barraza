import './Card.css'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Modal from '../Modal/Modal';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CardItem = ({ image, title, price, details, stock, category, id } ) => {
    const[open, setOpen] = useState(false)
    

    const handleClose = () => {
        setOpen(false)
    }

    const addCart = () => {
        console.log(`Se agregó ${title} al carrito`)
    }

    return(
        <Card sx={{ minWidth: 275 }} className="card-container">
            <CardContent>
                <div className="card-item">    
                    <div>
                        <img src={`../shop/${image}`}/>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <ItemCount stock={stock}/>
                    <Button variant='outlined'><Link to={`/products/${category}/${id}`}>Detalle</Link></Button>
                    <Button variant='contained' onClick={addCart}>Comprar</Button>
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