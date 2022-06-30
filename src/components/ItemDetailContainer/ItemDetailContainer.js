import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../utils/productsMock'
import { useNavigate, useParams } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore'
import db from "../../utils/firebaseConfig";

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

    useEffect(() => {
        // getItem()
        // .then( (res) => {
        //     console.log("Respuesta GetItem: ", res)
        //     setProduct(res)
        // })
        console.log("productFilter: ", productFilter)
        if(productFilter === undefined){
            navigate('/notFound')
        }else {
            setProduct(productFilter)
        }

        getProduct()
        .then( (prod) => {
            console.log("Respuesta getProduct: ", prod)
            setProduct(prod)
        })
        // console.log("productFilter: ", productFilter)
        // if(productFilter === undefined){
        //     navigate('/notFound')
        // }else {
        //     setProduct(productFilter)
        // }
    }, [id])

    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnapshot = await getDoc(docRef)
        console.log("docSnapshot: ", docSnapshot)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log("producto unico: ", product)
        return product
    }

    const productFilter = productos.find( (product) => {
        return product.id == id
    })
    
    return(
        <>
        <div>Contenedor ITEM</div>
        <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer