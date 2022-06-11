import { Doughnut } from 'react-chartjs-2';
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

    console.log(bestSeller)

    const data = {
        labels: [],
        datasets: [
            {
                labels: "My datasets",
                data: [300, 20, 50, 150, 60, 30, 20, 80, 100],
                backgroundColor: ["red", "green", "Yellow", "Grey ", "#FF6384", "blue", "orange", "black", "pink"],
                hoverOffset: 4
            }
        ]
    }
    if (category) {
        category.map(item => {
            data.labels.push(item.categoryName);
        })
    }

    return (
        <div>
            <div className="row">
                <div style={{ height: '600px', width: '600px', marginTop: '50px' }}>
                    <Doughnut data={data} />
                </div>
                <div style={{ marginLeft: '20px', marginTop: '10px' }}> <strong>BẢNG THỐNG KÊ SỐ LƯỢNG SẢN PHẨM BÁN RA CỦA MỖI DANH MỤC SẢN PHẨM</strong></div>    
            </div>
        </div>



    )
    // const totals = [];
    // var obj 
    // if (bestSeller) {
    //     bestSeller.map(item => {
    //         item.product.map(Lmao => {
    //                   obj = totals.find(o => o.product.idProduct === Lmao.product.idProduct);
    //                 if (obj) {
    //                     obj.quantity = Lmao.quantity + obj.quantity
    //                 } else {
    //                     totals.push(Lmao);
    //                 }  
    //         })
    //     })
    //     console.log(totals)
    // }

}
