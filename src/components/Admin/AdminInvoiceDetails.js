import React, { useEffect, useState } from 'react';
import '../Content/CSS/Button.css'
export function AdminInvoiceDetails({close, selectedInvoice}) {
    const url = `https://localhost:44380/api/Invoice/GetAdminInvoice`
    const [invoice, setInvoice] = useState(0)
    var details=selectedInvoice.product;
    console.log(details);
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
    var total=0;
    let content = null;
    if (invoice) {
        content =
            <div className="modal" style={{ position: "fixed", top: '0', bottom: '0', right: '0', left: '0', display: 'block' }}>
                <div className="modal-container">
                    <div className="close">
                    <a style={{ textDecoration: 'none' }} className="close" onClick={close}>
                    &times;
                </a>
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
                                {details.map(item => {
                                    
                                    for (let i = 0; i < details.length; i++) {
                                        console.log(item.product.idProduct);
                                        total=total+item.quantity*item.product.price;
                                        return (
                                            <tr key={item.product.idProduct} className="product_tr">
                                                <td>{item.product.name}</td>
                                                <td><img style={{ width: '150px', height: '150px',borderRadius:'0%' }} src={'https://localhost:44380//Image/'+item.product.imageUrl}/></td>
                                                <td>{item.product.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.quantity*item.product.price}</td>
                                            </tr>
                                        )
                                    }

                                })}
                            </tbody>

                        </table>
                        <div className="d-flex justify-content-end">
                            <p>Tổng cộng: <b id="total">{total}</b></p>
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