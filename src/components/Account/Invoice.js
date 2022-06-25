import React, { useEffect, useState } from 'react';
import '../Content/CSS/Button.css'
import Popup from "reactjs-popup";
import { InvoiceDetails } from './InvoiceDetails';
import Url from '../Home/URL'

export function Invoice() {
    const url = Url + `/api/Invoice/GetAllInvoice`
    const [invoice, setInvoice] = useState(0)
    let auth = sessionStorage.getItem('data')
    if (auth = null) {
        auth = sessionStorage.getItem('tokenGoogle')
    }

    if (auth != null) {
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
    }

    function PriceCount(product) {
        var totalPrice = 0;
        for (let i = 0; i < product.length; i++) {
            totalPrice += product[i].product.price * product[i].quantity;
        }
        return totalPrice.toString();
    }
    function currencyFormat(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'
    }
    let content = null;
    if (invoice) {
        content =
            <div className='wrapper'>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4" style={{ textTransform: 'uppercase' }}>Hóa đơn của bạn</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/account">Tài khoản</a></li>
                            <li className="breadcrumb-item active">Hóa đơn của bạn</li>
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
                                    return (
                                        <tr key={item.id} className="product_tr">
                                            <td>{item.id}</td>
                                            <td>{item.statused.statusName}</td>
                                            <td>{item.address.addressed}</td>
                                            <td>{item.address.reciever}</td>
                                            <td>{item.address.phone}</td>
                                            <td>
                                                {currencyFormat(PriceCount(item.product))}
                                            </td>
                                            <td>
                                                <Popup modal trigger={<button name="detail" className="btn btn-outline-danger btn-edit" type="button">Chi tiết</button>}>
                                                    {close => <InvoiceDetails close={close} selectedInvoice={item} />}
                                                </Popup>

                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
    }
    else {
        content =
            <div className='wrapper'>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4" style={{ textTransform: 'uppercase' }}>Hóa đơn của bạn</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/account">Tài khoản</a></li>
                            <li className="breadcrumb-item active">Hóa đơn của bạn</li>
                        </ol>
                        <h1 style={{ textAlign: 'center', marginTop: '10%', color: 'red' }}>Hóa đơn trống</h1>
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