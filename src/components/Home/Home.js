import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import pic from '../Content/Image/img1.jpg'
import { Content } from './Cate1';

export function Home() {
    const url = `https://localhost:44380/api/Product`
    const [product, setProduct] = useState(1)

    const [category1, setCate1] = useState(null)
    const [category2, setCate2] = useState(null)
    const [category3, setCate3] = useState(null)
    // const { id } = useParams
    // // const option = { method: "GET", mode: 'no-cors', headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    // let content1 = null
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json()

        ).then(data => {
            var cate1=[];
            var cate2=[];
            var cate3=[];
            data.map(item=>{
                if (item.idCategory == 1) {
                    cate1.push(item)
                }
                if (item.idCategory == 2) {
                    cate2.push(item)
                }
                if (item.idCategory == 3) {
                    cate3.push(item)
                }
            })
            setCate1(cate1)
            setCate2(cate2)
            setCate3(cate3)
        })
    }, [url])





    console.log(category1)
    console.log(category2)
    // var count = 0;
    // if(product){
    //     content1 =(
    //         <div style={{ marginTop: '150px' }} className="container">
    //             <div style={{ border: '5px solid blue', borderRadius: '20px', padding: '5px', margin: '10px 0' }}>
    //                 <h2 className="text-center">Nước hoa 2 </h2>
    //                 <div className="row">
    //                     {product.map(item => {
    //                         if (item.idCategory == 2 && count <8) {
    //                             count++
    //                             return (
    //                                 <div key={item.idProduct} className="col-3">
    //                                 <div style={{ minHeight: '450px', maxHeight: '450px' }}>
    //                                     <img src={'https://localhost:5001//Image/' + item.imageUrl} className="card-img-top" style={{minWidth:'100px',maxWidth:'150px'}} />
    //                                     <div className="card-body">
    //                                         <h5 className="card-title" style={{ minHeight: '100px' }}>{item.name}</h5>
    //                                         <h5 className="card-price" style={{ minHeight: '20px' }}>Giá: {item.price} VND</h5>
    //                                         <a href="#" className="btn btn-primary"><i className="fa-solid fa-circle-info"></i></a>
    //                                         <button name="add" className="btn btn-outline-danger" pid="@item.IDProduct"><i className="fa-solid fa-cart-shopping"></i></button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             )
    //                         }
    //                     })}
    //                 </div>
    //             </div>
    //         </div>)


    //     content =(
    //         <div style={{ marginTop: '150px' }} className="container">
    //             <div style={{ border: '5px solid blue', borderRadius: '20px', padding: '5px', margin: '10px 0' }}>
    //                 <h2 className="text-center">Nước hoa 1 </h2>
    //                 <div className="row">
    //                     {product.map(item => {
    //                         if (item.idCategory == 1 && count <8) {
    //                             count++
    //                             return (
    //                                 <div key={item.idProduct} className="col-3">
    //                                 <div style={{ minHeight: '450px', maxHeight: '450px' }}>
    //                                     <img src={'https://localhost:5001//Image/' + item.imageUrl} className="card-img-top" style={{minWidth:'100px',maxWidth:'150px'}} />
    //                                     <div className="card-body">
    //                                         <h5 className="card-title" style={{ minHeight: '100px' }}>{item.name}</h5>
    //                                         <h5 className="card-price" style={{ minHeight: '20px' }}>Giá: {item.price} VND</h5>
    //                                         <a href="#" className="btn btn-primary"><i className="fa-solid fa-circle-info"></i></a>
    //                                         <button name="add" className="btn btn-outline-danger" pid="@item.IDProduct"><i className="fa-solid fa-cart-shopping"></i></button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             )
    //                         }
    //                     })}
    //                 </div>
    //             </div>
    //         </div>)



    // }

    // setProduct(2)
    return (
        <div>
            <Content data={category1} name={"Nước Hoa Nam"}>

            </Content>
            <Content data={category2} name={"Nước Hoa Nữ"}>

            </Content>
            <Content data={category3} name={"Nước Hoa Unisex"}>

            </Content>
        </div>

    )

}



