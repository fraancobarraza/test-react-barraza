import CardList from "../components/CardList/CardList"
import productos from "../utils/productsMock"

const Home = () => {
    return(
        <>
        <div className="generalContainer-Home">
            <h1>Home</h1>
            <CardList title={'Nuestros Productos'} products={productos}/>
        </div>
        </>
    )
}

export default Home