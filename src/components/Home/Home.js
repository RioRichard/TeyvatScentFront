import React, { useState, useEffect } from 'react'
import { Content } from './Cate1';
import {ProductSlider} from "./ProductSlider";
import {MainSlider} from './MainSlider'
import Url from './URL'

export function Home(logggedUser) {
    const url = Url + `/api/Product`

    const [category1, setCate1] = useState(null)
    const [category2, setCate2] = useState(null)
    const [category3, setCate3] = useState(null)
    const [category, setCate4] = useState(null)
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
            var cate4=[]
            data.map(item=>{
                if (item.idCategory === 1) {
                    cate1.push(item)
                }
                if (item.idCategory === 2) {
                    cate2.push(item)
                }
                if (item.idCategory === 3) {
                    cate3.push(item)
                }
                cate4.push(item)
            })
            setCate1(cate1)
            setCate2(cate2)
            setCate3(cate3)
            setCate4(cate4)
        })
    }, [url])
    return (
        <div>
            <MainSlider></MainSlider>
            <ProductSlider data={category} name={"Sản Phẩm Nổi Bật"}>

            </ProductSlider>
            <Content data={category1} name={"Nước Hoa Nam"}>

            </Content>

            <Content data={category2} name={"Nước Hoa Nữ"}>

            </Content>
            <Content data={category3} name={"Nước Hoa Unisex"}>

            </Content>
        </div>

    )

}



