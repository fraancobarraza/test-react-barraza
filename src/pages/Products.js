import CardList from "../components/CardList/CardList"
import productos from "../utils/productsMock"

const Products = () => {
    return(
        <>
        <div className="generalContainer">
            <CardList title={'Nuestros Productos'} products={productos}/>
        </div>
        </>
    )
}

export default Products