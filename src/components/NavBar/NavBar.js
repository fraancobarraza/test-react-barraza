//UpperCamelCase
import './NavBar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (

        <AppBar position="static">
            <Toolbar>
                <div className='navlogo'>
                    <img src='../../logo.png' alt='Logo' />
                </div>
                <div className='navlist'>
                    <ul>
                        <li>
                            <Button 
                                color='inherit'
                            >
                                <Link to="/">
                                    Inicio
                                </Link>
                            </Button>
                        </li>
                        <li>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    color='inherit'
                                >
                                    Shop
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}><Link to={`/products/muzarella`}>Muzarella</Link></MenuItem>
                                    <MenuItem onClick={handleClose}><Link to={`/products/blandos`}>Quesos Blandos</Link></MenuItem>
                                    <MenuItem onClick={handleClose}><Link to={`/products/tybo`}>Barra Tybo</Link></MenuItem>
                                </Menu>
                        </li>
                        <li>
                            <Button 
                                color='inherit'
                            >
                                <Link to="/recipes">
                                    Recetas
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Button 
                                color='inherit'
                            >
                                <Link to="/stores">
                                    Donde Comprar
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Button 
                                color='inherit'
                            >
                                <Link to="/contact">
                                    Contacto
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className='login'>
                    <CartWidget/>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar