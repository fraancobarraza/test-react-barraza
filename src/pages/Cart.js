import { useContext } from "react"
import { Link } from "react-router-dom"
import "../../src/App.css"
import CartContext from "../context/CartContext"

const Cart = () => {
    const { cartListItems } = useContext(CartContext)

    
    return(
        <>
        <div className="cart-titles">
            <h2>Producto</h2>
            <h2>Descripcion</h2>
            <h2>Precio Unitario</h2>
            <h2>Cantidad</h2>
            <h2>Quitar</h2>
        </div>
        {cartListItems.map( (item) => {
            const { id, title, image, price } = item
            return(
                <div className="cart-content" key={id}>
                    <div>
                        <img src={`../../shop/${image}`}/>
                    </div>
                    <div>
                        <p>{title}</p>
                    </div>
                    <div>
                        <p>$ {price}</p>
                    </div>
                    <div>
                        <p>cantidad</p>
                    </div>
                    <div>
                        <delete />
                    </div>
                </div>
            )
        } )}
        
        <div className="cart-footer">
            <div></div>
            <div></div>
            <div></div>
        </div>
        </>
    )
}
export default Cart