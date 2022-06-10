import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    const {cartListItems} = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div variant='filled'>
            <ShoppingCartIcon 
                variant='filled'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                            <Link to="/" >Empezar a comprar</Link>
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                            <>
                            <div key={item.id}>
                                <div>
                                    <img src={`../shop/${item.image}`}/>
                                </div>
                                <p>{item.title}</p>
                                <span>$ {item.price}</span>
                            </div>
                            <div>
                                <button>
                                    <DeleteIcon />
                                </button>
                            </div>
                            </>
                        )
                    })}
                    </div>
                </Menu>
        </div>
    )
}

export default CartWidget