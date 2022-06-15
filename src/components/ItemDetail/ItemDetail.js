import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {
    const [count, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)
    
    console.log()
    return(
        <div className="detail-container">
            <div className="detail-image">
                <img src={`../../shop/${data.image}`}/>
            </div>
            <div className="detail-info">
                <h2>{data.title}</h2>
                <span className='detail-price'>$ {data.price} x KG</span>
                <p className='detail-text'>{data.details}</p>
                {!showButton ?
                <ItemCount 
                    addCart={data}
                    stock={data.stock} 
                    count={count} 
                    actualizarCantidad={setCantidad} 
                    setShowButton={setShowButton}
                />
                :
                <Button variant='outlined'><Link to='/cart'>Termina mi compra</Link></Button>}
            </div>
        </div>
    )
}

export default ItemDetail;