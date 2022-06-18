import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



export function Product() {
    const url = `https://localhost:5001/api/Product/1`
    const [product, setProduct] = useState(null)
    const { id } = useParams
    let content = null

    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setProduct(data))
    }, [url])


    if (product) {
        content =
        <div>
        {product.map(item => (<div key={item.name}>
            <div className="container" >

                <h1 style={{ marginTop: '500px' }}>{item.name}</h1>
                {console.log(item)}
            </div>
        </div>)
        )}
        </div>
    }

    return (
        <div>
            {content}
        </div>


    )

}