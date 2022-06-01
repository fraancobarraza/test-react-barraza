const ItemDetail = ({data}) => {
    console.log()
    return(
        <div>
            <h2>{data.title}</h2>
            <span>$ {data.price}</span>
            <div>
                <img src={`./shop/${data.image}`}/>
            </div>
            <p>{data.details}</p>
        </div>
    )
}

export default ItemDetail;