import { Doughnut } from 'react-chartjs-2';
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chart from "chart.js/auto"
import { CategoryScale } from 'chart.js';
import '../Content/CSS/Chart.css'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export function ChartTest() {
    const url = `https://localhost:44380/api/Category`
    const [category, setCategory] = useState('')

    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setCategory(data))
    }, [url])

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
}




