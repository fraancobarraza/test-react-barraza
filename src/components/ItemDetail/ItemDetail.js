import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material'

const ItemDetail = ({data}) => {
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
                <ItemCount stock={data.stock}/>
                <Button variant='contained'>Comprar</Button>
            </div>
        </div>
    )
}

export default ItemDetail;