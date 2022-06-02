import React from 'react'
import Carousel from 'react-elastic-carousel'
import { BrowserRouter as Router, Link } from 'react-router-dom';
export function ProductSlider(props) {
    var name = props.name
    var product = props.data
    var count = 0;
    // console.log(product)
    var result;
    if (product) {
        result = (
            <div style={{ marginTop: '150px' }} className="container">
                <div style={{}}>
                    <h2 className="text-center">{name}  </h2>
                    <div className="row">
                        <Carousel itemsToShow={5} pagination={false} style={{ minHeight: '300px' }}>
                            {product.map(item => {
                                if (count < 12) {
                                    count++
                                    return (
                                        <div key={item.idProduct} className="col-3" style={{ maxWidth: '70%', cursor: 'pointer', userSelect: 'none' }} draggable="false">
                                            <div style={{ minHeight: '300px', maxHeight: '450px' }}>
                                                <Link to={`/ProductDetail/${item.idProduct}`} style={{ userSelect: 'none' }}>
                                                    <img src={'https://localhost:44380//Image/' + item.imageUrl} className="card-img-top" style={{ minWidth: '130px', maxWidth: '150px', height: "180px", userDrag: 'none' }} />
                                                </Link>
                                                <div className="card-body">
                                                    <a style={{textDecoration:'none'}}  href={`/ProductDetail/${item.idProduct}`}><h5 className="card-title" style={{ minHeight: '100px', fontSize: '18px', minWidth: '130px', color: 'black', touchAction: 'manipulation' }} dangerouslySetInnerHTML={{ __html: item.name }}></h5></a>
                                                    <h5 className="card-price" style={{ minHeight: '20px', fontSize: '18px', minWidth: '130px', color: 'red' }}>Giá: {item.price} VND</h5>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </Carousel>

                    </div>
                </div>
            </div>)
    }
    return result;

}