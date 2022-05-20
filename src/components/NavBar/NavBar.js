//UpperCamelCase
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (

        <AppBar position="static">
            <Toolbar>
                <div className='navlogo'>
                    <img src='./logo.png' alt='Logo' />
                </div>
                <div className='navlist'>
                    <ul>
                        <li>
                            <Button color='inherit'>Inicio</Button>
                        </li>
                        <li>
                            <Button color='inherit'>Shop</Button>
                        </li>
                        <li>
                            <Button color='inherit'>Recetas</Button>
                        </li>
                        <li>
                            <Button color='inherit'>Donde Comprar</Button>
                        </li>
                        <li>
                            <Button color='inherit'>Contacto</Button>
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