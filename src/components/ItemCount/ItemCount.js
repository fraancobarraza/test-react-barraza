import { Button } from '@mui/material';
import { useState } from 'react';

const ItemCount = ({stock}) => {
    const[count, setCount] = useState(1)

    const addCount = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const removeCount = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    return(
        <div className='count-item'> 
            <Button onClick={removeCount}>-</Button>
            <p>{count}</p>
            <Button onClick={addCount}>+</Button>
        </div>  
    )
}

export default ItemCount