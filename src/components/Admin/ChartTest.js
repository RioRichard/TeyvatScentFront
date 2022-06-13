import { Doughnut } from 'react-chartjs-2';
import React, { useState, useEffect, useRef, useCallback } from "react";
import Chart from "chart.js/auto"
import { CategoryScale } from 'chart.js';
import '../Content/CSS/Chart.css'

export function ChartTest() {
    const invoiceurl = 'https://localhost:44380/api/Invoice/GetAllInvoice'
    const url = `https://localhost:44380/api/Category`
    const [category, setCategory] = useState('')
    const [bestSeller, setBestSeller] = useState('')
    let auth = sessionStorage.getItem('data')
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
                'Authorization': "Bearer " + auth,
            }
        }
        ).then(response => response.json()
        ).then(data => setBestSeller(data))
    }, [invoiceurl])

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
    if (bestSeller) {
        bestSeller.map(item => {
            item.product.map(Lmao => {

                    if (Lmao.product.idCategory == 2) {
                       console.log(Lmao)
                    }  
            })
        })  
    }
    if (bestSeller) {
        bestSeller.map(item => {
            item.product.map(Lmao => {
                      obj = totals.find(o => o.product.idProduct === Lmao.product.idProduct);
                    if (obj) {
                        obj.quantity = Lmao.quantity + obj.quantity
                    } else {
                        totals.push(Lmao);
                    }  
            })
        })  
        bestSeller.map(item => {
            item.product.map(Lmao1 => {
                objCateQuan = totalsCateQuan.find(o => o.product.idCategory === Lmao1.product.idCategory);
                    if (objCateQuan) {
                        objCateQuan.quantity = Lmao1.quantity + objCateQuan.quantity
                    } else {
                        totalsCateQuan.push(Lmao1);
                    }  
            })
        })  
    }
    if (category && totalsCateQuan) {
        category.map(item => {
                obj2 = totalsCateQuan.find(o => o.product.idCategory === item.idCategory);
                if(obj2)
                {
                    data.labels.push(item.categoryName)
                    data.datasets[0].data.push(obj2.quantity)    
                }
        })
    }
    
    if(totals)
    {
        var biggest =  Math.max(...totals.map(o => o.quantity))
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
                        totals.map(item=> {
                            if(item.quantity == biggest)
                            {
                                return(
                                    <div className='col-6'>
                                <h2 style={{marginTop:'50px', textAlign:'center', fontWeight:'bold'}}>Best Sell Product</h2>
                                <h3 style={{textAlign:'center'}} className='bestSaleProductName' dangerouslySetInnerHTML={{ __html: item.product.name }}></h3>
                                <img style={{marginLeft:'30%'}} width={'50%'} src={'https://localhost:44380//Image/' + item.product.imageUrl}></img>
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
