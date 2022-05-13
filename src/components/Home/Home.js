import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import pic from '../Content/Image/img1.jpg'
import { Content } from './Cate1';

export function Home() {
    const url = `https://localhost:5001/api/Product`
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
                if (item.idCategory == 2) {
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



