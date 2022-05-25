
import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom';

export function SearchedPage() {
  
  const { state } = useLocation();
  const url = `https://localhost:5001/api/Product/Search?search=` + state.value
  const [product, setProduct] = useState(null)



  // const option = { method: "GET", mode: 'no-cors', headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
  let content = null

  useEffect(() => {
      fetch(url)
          .then(response => response.json()

          ).then(data => setProduct(data))
  }, [url])         
 
  if (product) {
    content =
        <div className="" style={{ padding: '0!important' }} >
            <div className="row">
                <div className="col-12" >
                    <div className="">
                        <div className="row" style={{ marginRight: '-200px' }}>
                            {product.map(item => (
                             
                                <div key={item.name} className="col-3" style={{ paddingBottom: '40px', marginTop:'200px' }}>
                                <div className="" style={{ maxHeight: '100px', maxWidth: '150px', minHeight: '250px' }}>
                                    <a href={`/ProductDetail/${item.idProduct}`}>
                                        <img width={160} height={160} src={'https://localhost:5001//Image/' + item.imageUrl} alt={item.name} className="card-img-top" />
                                    </a>
                                    <div className="">
                                        <a href={`/ProductDetail/${item.idProduct}`}>
                                            <h5 style={{ minHeight: '50px', color: 'black', fontSize: '15px' }} className="card-title">{item.name}</h5>
                                        </a>
                                        <h6 style={{color:'red'}} className="card-price">{item.price} VND</h6>


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