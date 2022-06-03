import productos from "../utils/productsMock"
import { useEffect, useState } from "react"
import CardList from "../components/CardList/CardList"
import { useParams } from "react-router-dom"

const Category = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams() 
    useEffect( () => {
        getProducts()
        .then( (response) => {
            setProducts([])
            filterCategory(response)
        })
    },[category])


    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            resolve(productos)
        })
    }
    
    const filterCategory = (array) => {
        return array.map ( (item) => {
            if(item.category == category){
                return setProducts(products => [...products, item])
            }
        })
    }
    

    console.log(products)
    return(
        <div>
            <CardList title={'Productos'} products={products}/>
        </div>
    )
}

export default Category