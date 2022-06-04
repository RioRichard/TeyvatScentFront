import React, { useEffect, useState } from 'react';
import '../Content/CSS/Button.css'
// import $ from 'jquery';
export function Invoice() {
    const url = `https://localhost:44380/api/Invoice/GetAllInvoice`
    const [invoice, setInvoice] = useState(0)
    let auth = sessionStorage.getItem('data')
    useEffect(() => {
        fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + auth,
            }
        }
        )
            .then(response => response.json()

            ).then(data => setInvoice(data))
    }, [url])
    // console.log(invoice)
    let content = null;
    if (invoice) {
        content =
            <div className='wrapper'>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4" style={{ textTransform: 'uppercase' }}>Đơn hàng của bạn</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/account">Tài khoản</a></li>
                            <li className="breadcrumb-item active">Đơn hàng của bạn</li>
                        </ol>
                        <table className="table table-bordered">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <td>Số hoá đơn</td>
                                    <td>Tình trạng</td>
                                    <td>Địa chỉ nhận</td>
                                    <td>Người nhận</td>
                                    <td>Số điện thoại</td>
                                    <td>Tổng số tiền</td>
                                    <td>Chi tiết hoá đơn</td>




                                </tr>
                            </thead>
                            <tbody>
                                {invoice.map(item => {
                                    console.log(item);
                                    return (
                                        <tr key={item.invoices.idInvoice} className="product_tr">
                                            <td>{item.invoices.idInvoice}</td>
                                            <td>{item.invoices.idStatus}</td>
                                            <td>{item.invoices.address}</td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                {/* @item.Total.ToString("#,##0") VNĐ */}
                                            </td>
                                            <td><button name="detail" className="btn btn-outline-danger btn-edit" type="button">Chi tiết</button></td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </main>
            </div>

    }
    return (
        <div>
            {content}
        </div>
    )
}