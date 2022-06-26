import React, { useEffect, useState } from 'react';
import '../Content/CSS/Button.css'
import Popup from "reactjs-popup";
import { AdminInvoiceDetails } from './AdminInvoiceDetails';
import { GetStatus } from './GetStatus';
import Url from '../Home/URL'
export function AdminInvoice() {
    const url = Url +`/api/Invoice/GetAdminInvoice`
    let  authAdmin = sessionStorage.getItem('dataAdmin') 
    const [invoice, setInvoice] = useState(0)
    useEffect(() => {
        fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + authAdmin,
            }
        }
        )
            .then(response => response.json()

            ).then(data => setInvoice(data))
    }, [url])

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
                        <h1 className="mt-4" style={{ textTransform: 'uppercase' }}>Quản lí đơn hàng</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/account">Tài khoản</a></li>
                            <li className="breadcrumb-item active">Quản lí đơn hàng</li>
                        </ol>
                        <table className="table">
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
                                        <tr key={item.id} className="product_tr">
                                            <td>{item.id}</td>
                                            <td><GetStatus value={item} /></td>
                                            <td>{item.address.addressed}</td>
                                            <td>{item.address.reciever}</td>
                                            <td>{item.address.phone}</td>
                                            <td>
                                                {currencyFormat(PriceCount(item.product))}
                                            </td>
                                            <td>
                                                <Popup modal trigger={<button name="detail" className="btn btn-outline-danger btn-edit" type="button">Chi tiết</button>}>
                                                    {close => <AdminInvoiceDetails close={close} selectedInvoice={item} />}
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
    return (
        <div>
            {content}
        </div>
    )
}