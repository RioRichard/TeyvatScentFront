import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

export function ProductbyCategory() {
    const params = useParams();
    // const  product_slug = props.match.params.product.id;
    const url = `https://localhost:44380/api/Product/GetByCategory/${params.idCategory}`
    const [product, setProduct] = useState(null)



    // const option = { method: "GET", mode: 'no-cors', headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    let content = null

    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setProduct(data))
    }, [params.idCategory])

    if (product) {
        content =
            <div className="container-fluid" style={{ padding: '0!important' ,marginTop: '200px'}} >
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid">
                        <div className="row">
                            {product.map(item => (
                                
                                <div key={item.name} className=" col-4" style={{paddingBottom:'40px'}}>
                                        <div className="card border-secondary" style={{maxHeight: '500px', maxWidth: '300px', minHeight: '250px', minWidth: '150px'}}>
                                        <a href={`/ProductDetail/${item.idProduct}`}>
                                                <img src={'https://localhost:44380//Image/' + item.imageUrl} alt={product.name} className="card-img-top" />
                                            </a>
                                            <div className="card-body">
                                            <a href={`/ProductDetail/${item.idProduct}`}>
                                                    <h5 style={{minHeight:'70px', color: 'black'}} className="card-title">{item.name}</h5>
                                                </a>

                                                <h6 className="card-price">{item.price} VND</h6>


                                            </div>
                                        </div>
                                    </div>
                                    
                    
                            )
                            )}
                               
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            

    }
    return (

        <div>
            {content}
        </div>

    )
}