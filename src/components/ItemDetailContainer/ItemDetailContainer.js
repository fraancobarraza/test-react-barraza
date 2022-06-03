import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../utils/productsMock'
import { useNavigate, useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id, category } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    // const getItem = () => {
    //     return new Promise( (resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(producto)
    //         }, 2000)
    //     })
    // }

    useEffect( () => {
    //     getItem()
    //     .then( (res) =>{
    //         console.log('Repuesta GetItem: ', res)
    //         setProduct(res)
    //     })
    if(productFilter === undefined){
        navigate('/NotFound')
    }else{
        setProduct(productFilter)
    }
    }, [])

    const productFilter = productos.find( (product) => {
        return product.id == id
    })

    const categoryFilter = productos.filter
    
    return(
        <>
        <div>Contenedor ITEM</div>
        <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer