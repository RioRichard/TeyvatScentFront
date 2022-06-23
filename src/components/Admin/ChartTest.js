import { Doughnut } from 'react-chartjs-2';
import React, { useState, useEffect, useRef, useCallback } from "react";
import Chart from "chart.js/auto"
import { CategoryScale } from 'chart.js';
import '../Content/CSS/Chart.css'
import Url from '../Home/URL'

export function ChartTest() {
    const invoiceurl = Url + '/api/Invoice/GetAdminInvoice'
    const url = Url + `/api/Category`
    const [category, setCategory] = useState('')
    const [bestSeller, setBestSeller] = useState('')
    let authAdmin = sessionStorage.getItem('dataAdmin')
    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setCategory(data))
    }, [url])

    useEffect(() => {
        fetch(invoiceurl, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + authAdmin,
            }
        }
        ).then(response => response.json()
        ).then(data => setBestSeller(data))
    }, [invoiceurl])
    console.log(invoiceurl);
    const totals = [];
    const totalsCateQuan = [];
    var obj 
    var objCateQuan
    var obj2
    
    const data = {
        labels: [],
        datasets: [
            {
                labels: "My datasets",
                data: [],
                backgroundColor: ["red", "green", "Yellow", "Grey ", "#FF6384", "blue", "orange", "black", "pink"],
                hoverOffset: 4
            }
        ]
    }
    
    if (bestSeller) //Tong hop lai cac san pham co cung id va cong quanlity
    {
        bestSeller.map(item => {
            item.product.map(innerproduct1 => {
                objCateQuan = totalsCateQuan.find(o => o.product.idCategory === innerproduct1.product.idCategory);
                    if (objCateQuan) {
                        objCateQuan.quantity = innerproduct1.quantity + objCateQuan.quantity
                    } else {
                        totalsCateQuan.push(innerproduct1);
                    }  
            })
        })  
    }

    if (category && totalsCateQuan) //Thong ke so luong ban ra cua moi san pham
    {
        category.map(item => {
                obj2 = totalsCateQuan.find(o => o.product.idCategory === item.idCategory);
                if(obj2)
                {
                    data.labels.push(item.categoryName)
                    data.datasets[0].data.push(obj2.quantity)    
                }
        })
    }
    if(totalsCateQuan) //Best Seller
    {
        var biggest =  Math.max(...totalsCateQuan.map(o => o.quantity))
        return (
            <div>
                <div className="row">
                    <div className='col-6'>
                        <div style={{ height: '600px', width: '600px', marginTop: '50px' }}>
                            <Doughnut data={data} />
                        </div>
                        <div style={{  marginTop: '10px' }}> <h4><strong>BẢNG THỐNG KÊ SỐ LƯỢNG SẢN PHẨM BÁN RA CỦA MỖI DANH MỤC SẢN PHẨM</strong></h4></div>
                    </div>
                    {
                        totalsCateQuan.map(item=> {
                            if(item.quantity == biggest)
                            {
                                return(
                                    <div className='col-6'>
                                <h2 style={{marginTop:'50px', textAlign:'center', fontWeight:'bold'}}>Best Sell Product</h2>
                                <h3 style={{textAlign:'center'}} className='bestSaleProductName' dangerouslySetInnerHTML={{ __html: item.product.name }}></h3>
                                <img style={{marginLeft:'30%'}} width={'50%'} src={Url + '//Image/' + item.product.imageUrl}></img>
                            </div>
                                )
                            }
                        })
                    } 
                </div>
            </div>
        )
    }
}
