import React, { useState, useEffect } from 'react'
export function Content(props) {
    var name=props.name
    var product=props.data
    var count = 0;
    // console.log(product)
    var result;
    console.log(product)
    if(product)
    {
        result = (
            <div style={{ marginTop: '150px' }} className="container">
                <div style={{ border: '5px solid blue', borderRadius: '20px', padding: '5px', margin: '10px 0' }}>
                    <h2 className="text-center">{name}  </h2>
                    <div className="row">
                        {product.map(item => {
                            if (count < 8) {
                                count++
                                return (
                                    <div key={item.idProduct} className="col-3">
                                        <div style={{ minHeight: '450px', maxHeight: '450px'}}>
                                            <img src={'https://localhost:44380//Image/' + item.imageUrl} className="card-img-top" style={{ minWidth: '100px', maxWidth: '150px' ,height: "180px"}} />
                                            <div className="card-body">
                                                <h5 className="card-title" style={{ minHeight: '100px' }}>{item.name}</h5>
                                                <h5 className="card-price" style={{ minHeight: '20px' }}>Giá: {item.price} VND</h5>
                                                <a href="#" className="btn btn-primary">Info</a>
                                                <button name="add" className="btn btn-outline-danger" pid="@item.IDProduct">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>)
    }        
    return result;

}