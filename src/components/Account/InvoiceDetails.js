import React, { useEffect, useState } from 'react';
import '../Content/CSS/Button.css'
export function InvoiceDetails() {
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
    let content = null;
    if (invoice) {
        content =
            <div className="modal" style={{ position: "fixed", top: '0', bottom: '0', right: '0', left: '0', display: 'block' }}>
                <div className="modal-container">
                    <div className="close">
                        <i className="fas fa-times-circle"></i>
                    </div>
                    <header className="modal-header">
                        <i className="far fa-edit"></i>
                        Chi tiết đơn hàng
                    </header>
                    <div className="modal-body">
                        <table className="table table-bordered">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <td>Tên sản phẩm</td>
                                    <td>Hình ảnh</td>
                                    <td>Giá tiền</td>
                                    <td>Sô lượng</td>
                                    <td>Tổng số tiền</td>



                                </tr>
                            </thead>
                            <tbody id="tbodyModal">
                                {invoice.map(item => {
                                    console.log(item)
                                    for (let i = 0; i < item.product.length; i++) {
                                        return (
                                            <tr key={item.id} className="product_tr">
                                                <td>{item.id}</td>
                                                <td>{item.statused.statusName}</td>
                                                <td>{item.address.addressed}</td>
                                                <td>{item.address.reciever}</td>
                                                <td>{item.address.phone}</td>
                                            </tr>
                                        )
                                    }

                                })}
                            </tbody>

                        </table>
                        <div className="d-flex justify-content-end">
                            <p>Tổng cộng: <b id="total"></b></p>
                        </div>

                    </div>


                </div>
            </div>

    }
    return (
        <div>
            {content}
        </div>
    )
}