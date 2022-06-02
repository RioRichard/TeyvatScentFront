
import '../Content/CSS/Button.css'
import React, { useState, useEffect } from 'react'
// import $ from 'jquery';
export function Cart() {
    const url = `https://localhost:44380/api/Cart/GetCart`
    const [cart, setCart] = useState(0)

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

            ).then(data => setCart(data))
    }, [url])

    if(cart)
    {
        console.log(cart)
    }
   
    let content = null
    if (cart) {
        content =
            <div className='wrapper'>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">GIỎ HÀNG CỦA BẠN</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/account">Tài khoản</a></li>
                            <li className="breadcrumb-item active">Giỏ hàng của bạn</li>
                        </ol>
                        <table className="table table-bordered">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <td>Tên sản phẩm</td>
                                    <td>Hình ảnh</td>
                                    <td>Giá tiền</td>
                                    <td>Sô lượng</td>
                                    <td>Tổng số tiền</td>
                                    <td>Tình trạng sản phẩm</td>
                                    <td>Xoá sản phẩm</td>


                                </tr>
                            </thead>
                            <tbody>
                            {
                                cart.product.map(item => {
                                    return(
                                        <tr key={item.idCart} className="product_tr">
                                    <td><h3>{item.name}</h3></td>
                                    <td><img src={'https://localhost:44380//Image/' + item.imageUrl} alt={item.name} style={{ width: '150px', height: '150px',borderRadius:'0%' }} /></td>
                                    <td>
                                        <div className="unitprice" > <h3>{item.price}</h3></div>
                                    </td>

                                    <td><input type="number" className="quantity" name="quantity" defaultValue="@item.Quantity" cid="@item.IDCart" pid="@item.IDProduct" min="0" required /></td>
                                    <td><div className="totalItem"></div></td>
                                    <td>
                                    {item.stock <= 0 &&
                                        <span id="stock_status" style={{color:'red'}}>Hết Hàng</span>}
                                    {item.stock > 0 &&
                                        <span id="stock_status" ><h3>Còn Hàng</h3></span>}
                                    </td>
                                    <td><button name="delete" className="btn btn-outline-danger" cid="@item.IDCart" pid="@item.IDProduct"> Xóa<i className="fas fa-trash"></i></button></td>
                                </tr>)
                                    

                                })
                            }
                                   
                                


                            </tbody>

                        </table>
                        <div className="d-flex justify-content-end">
                            <p>Tổng cộng: <b className="total"></b></p>
                        </div>
                        <div className="d-flex justify-content-end" style={{ marginBottom: '10px', marginTop: '10px' }}>
                            <button className="btn btn-primary btn-edit" type="button">Chỉnh địa chỉ.</button>
                        </div>
                        <div className="d-flex justify-content-end">
                            <input type="hidden" name="addressCount" defaultValue="@ViewBag.AddressCount" />



                            <a href="/" className="btn btn-outline-primary">Tiếp tục mua sắm</a>

                            <button name="charge" type="button" className="btn btn-danger" style={{ marginLeft: '20px' }}>Thanh toán!</button>
                        </div>

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
